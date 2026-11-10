import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sentry.dev/mcp",
  description: "Investigate and debug application errors.",
  auth: connect({ connector: "mcp.sentry.dev/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
