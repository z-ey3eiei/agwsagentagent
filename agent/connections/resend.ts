import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.resend.com",
  description: "Send transactional emails from your apps.",
  auth: connect({ connector: "mcp.resend.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
