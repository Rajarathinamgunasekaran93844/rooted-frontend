import { useEffect, useState } from "react";

/**
 * Load catalog content from the ROOTED API while rendering the saved site
 * content immediately. The saved content remains available if the API is
 * sleeping or temporarily unreachable.
 */
export default function useCatalogData(endpoint, fallbackData) {
  const [result, setResult] = useState({ endpoint, data: fallbackData });

  useEffect(() => {
    if (!endpoint) {
      return undefined;
    }

    const controller = new AbortController();

    fetch(endpoint, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Catalog request failed with ${response.status}.`);
        }
        return response.json();
      })
      .then((data) => {
        if (data === null || typeof data !== "object") {
          throw new Error("Catalog response was not valid JSON data.");
        }
        setResult({ endpoint, data });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setResult({ endpoint, data: fallbackData });
        }
      });

    return () => controller.abort();
  }, [endpoint, fallbackData]);

  return result.endpoint === endpoint ? result.data : fallbackData;
}
