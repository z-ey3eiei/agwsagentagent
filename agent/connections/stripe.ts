import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.stripe.com",
  description: "Manage payments and financial workflows.",
  auth: connect({ connector: "mcp.stripe.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
