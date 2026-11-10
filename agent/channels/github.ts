import { connectGitHubCredentials } from "@vercel/connect/eve";
import { defaultGitHubAuth, githubChannel } from "eve/channels/github";
import { GITHUB_CONNECTOR } from "../lib/github";

const botName = process.env.GITHUB_BOT_NAME || "agwsagent";
const escapedBotName = botName.replace(/[.*+?^{}$()|[\]\\]/g, "\\$&");
const mention = new RegExp("@" + escapedBotName + "(?![\\w-])", "i");
const trusted = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);

export default githubChannel({
  botName,
  credentials: connectGitHubCredentials(GITHUB_CONNECTOR),
  onComment: (ctx, comment) =>
    mention.test(comment.body) && trusted.has(String(comment.raw.author_association))
      ? { auth: defaultGitHubAuth(ctx) }
      : null,
});
