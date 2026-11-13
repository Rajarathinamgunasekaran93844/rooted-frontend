import { Buffer } from "node:buffer";
import process from "node:process";

const maximumBodyBytes = 16 * 1024;
const upstreamTimeoutMilliseconds = 10_000;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16kb",
    },
  },
};

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ message: "Method not allowed." });
    return;
  }

  const contentType = String(request.headers["content-type"] || "")
    .split(";")[0]
    .trim()
    .toLowerCase();
  if (contentType !== "application/json") {
    response.status(415).json({ message: "Content-Type must be application/json." });
    return;
  }

  if (!request.body || typeof request.body !== "object" || Array.isArray(request.body)) {
    response.status(400).json({ message: "A JSON object is required." });
    return;
  }

  const body = JSON.stringify(request.body);
  if (Buffer.byteLength(body, "utf8") > maximumBodyBytes) {
    response.status(413).json({ message: "Request body is too large." });
    return;
  }

  const backendUrl = process.env.ROOTED_BACKEND_URL;
  const proxyToken = process.env.ROOTED_API_PROXY_TOKEN;
  if (!backendUrl || !proxyToken) {
    response.status(503).json({ message: "Subscription service is not configured." });
    return;
  }

  let target;
  try {
    target = new URL("/api/subscriptions", backendUrl);
    const isLocalDevelopment = ["localhost", "127.0.0.1", "::1"].includes(target.hostname);
    if (target.protocol !== "https:" && !(isLocalDevelopment && target.protocol === "http:")) {
      response.status(503).json({ message: "Subscription service is not configured." });
      return;
    }
  } catch {
    response.status(503).json({ message: "Subscription service is not configured." });
    return;
  }

  try {
    const upstream = await fetch(target, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Rooted-Proxy-Token": proxyToken,
      },
      body,
      redirect: "error",
      signal: AbortSignal.timeout(upstreamTimeoutMilliseconds),
    });

    response.status(upstream.status);
    response.setHeader(
      "Content-Type",
      upstream.headers.get("content-type") || "application/json",
    );
    response.setHeader("Cache-Control", "no-store");
    const retryAfter = upstream.headers.get("retry-after");
    if (retryAfter) response.setHeader("Retry-After", retryAfter);

    response.end(await upstream.text());
  } catch (error) {
    const timedOut = error?.name === "TimeoutError" || error?.name === "AbortError";
    response.status(timedOut ? 504 : 502).json({
      message: "Subscription service is temporarily unavailable.",
    });
  }
}
