# The Vault

> A searchable second brain and live directory of the projects, tools, references and workflows worth keeping close.

**[Open the live Vault →](https://michaelkage.github.io/The-Vault/)**

The Vault now has two connected collections:

- **Resource index** — curated primary documentation, AI references, developer tools, design resources, hardware research and copy-ready terminal commands.
- **Project constellation** — a researched directory of public repositories, with concise descriptions, documented maturity labels, source links and verified public demo routes where available.

## Your project ecosystem

The directory covers the public work represented in the repositories, including:

| Area | Projects |
|---|---|
| Portfolio & web | MK.SYSTEMS, Campus Plug, JaFaFaWeb, RecordsDataBase |
| Products | OmniPocket, Vanguard, OmniLauncher |
| AI & developer infrastructure | Axiom, OmniRoute, AI Gateway |
| Research & simulation | Life Itself, Terranova, WasteLens |
| Automation | Daily-Log, UNILAG Watcher, Autonomous Media Network |

The live directory intentionally excludes private repositories and does not expose private project details. Archived projects are not presented as active products. Descriptions and maturity labels are grounded in each public repository's documentation; a prototype is labelled as a prototype rather than dressed up as a production launch.

## Site features

- Search resource and project names, descriptions, tags and categories.
- Filter resources by topic and projects by ecosystem area.
- Save resource favourites in the current browser.
- Copy common Git commands.
- Open source repositories and documented public demos.
- Explore documented relationships between Axiom and OmniRoute, Terranova and WasteLens, and the MK.SYSTEMS application gateway.

## Technical notes

- Static GitHub Pages site in `docs/index.html`.
- No frontend framework, build step or runtime package dependencies.
- Favourites are stored in browser-local `localStorage`; they do not sync between devices.
- Project entries are a reviewed snapshot, not a live GitHub API feed. Update them when a repository's README, deployment URL or maturity changes.
- Private repositories are deliberately omitted from the public site.
- The hardware build sheet remains unfilled until actual component details are available.

## Development and validation

Requires Node.js 22 or newer.

```bash
node --test scripts/test/*.test.mjs
```

The test suite checks the standalone HTML document, inline JavaScript syntax, resource links, local save/filter/copy behavior and project directory coverage.

## Contributing

Prefer primary documentation and source repositories. Include accurate descriptions, real destinations and explicit prototype/production status. Do not publish credentials, private repository details, personal data or unverified hardware specifications.

## License

MIT — see [LICENSE](LICENSE).
