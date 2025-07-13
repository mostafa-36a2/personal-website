import express from "express";
import path from "path";
import type { Express } from "express";

export async function setupVite(app: Express, server: any) {
  if (process.env.NODE_ENV === "production") return;

  const { createServer } = await import("vite");

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    root: "client", // optional override
  });

  app.use(vite.middlewares);
}

// ✅ Add this to support static serving in production
export function serveStatic(app: Express) {
  const staticPath = path.resolve(__dirname, "../public");
  app.use(express.static(staticPath));
  app.get("*", (_, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
}

// ✅ Add this log function if expected
export function log(message: string) {
  console.log(`[server] ${message}`);
}
