import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app.postdelegate.com/api/mcp",
  description: "Schedule and publish social posts to 30+ networks.",
  auth: connect({ connector: "app.postdelegate.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
