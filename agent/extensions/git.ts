import git from "eve/extensions/git";

import { brokerGitHubLease, GITHUB_CONNECTOR } from "../lib/github";

export default git({
  github: {
    connector: GITHUB_CONNECTOR,
    broker: brokerGitHubLease,
    principalType: "user",
    // GitHub enforces user and App access; repository is only a hint.
    authorize: ({ auth }) => auth !== null,
  },
});
