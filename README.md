# agwsagent

Based on the [eve Coding Agent template](https://eve.dev/templates/eve-coding-agent-template).

The selected channels are configured through Vercel Connect. Mention @agwsagent in a GitHub issue or pull request comment after deployment. Set GITHUB_BOT_NAME to your GitHub App slug if it differs from the project name. GitHub invocations require repository owner, member, or collaborator standing.

The code extension provides investigation, review, and read-only worker skills. Edits use code__apply_patch.

Authenticated git__gh commands require a signed-in caller and use a user access token from the selected GitHub App through Vercel Connect. GitHub limits that token to the intersection of the caller's access and the App's repository access and permissions. The tool's repository hint does not enforce an additional owner restriction; z-ey3eiei is the selected GitHub App owner. Public source may also be readable without authentication. Channel replies and the initial repository checkout use an App installation token, not the caller's token. Keep the reset-github-egress hook to clear the installation token's network access before the model runs; it does not remove source already checked out. GITHUB_CONNECTOR defaults to github/agwsagent-github.
