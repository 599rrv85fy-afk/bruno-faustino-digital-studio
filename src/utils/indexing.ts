// Evaluated during prerendering; Netlify exposes CONTEXT to the build process.
const context = process.env.CONTEXT;

// Unknown/missing Netlify contexts fail closed; ordinary local builds still work.
export const preventIndexing =
  import.meta.env.DEV ||
  (context ? context !== "production" : process.env.NETLIFY === "true");
