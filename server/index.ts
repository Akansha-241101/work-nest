const server = Bun.serve({
  hostname: "127.0.0.1",
  port: 3001,
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      if (request.method !== "GET") {
        return Response.json(
          { error: "Method not allowed" },
          { status: 405, headers: { Allow: "GET" } },
        );
      }

      return Response.json({ status: "ok" });
    }

    return Response.json({ error: "Not found" }, { status: 404 });
  },
});

console.log(`WorkNest API listening at ${server.url}`);
