import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.similarweb.com",
  description: "Analyze web, mobile app, and market performance.",
  auth: connect({ connector: "mcp.similarweb.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
