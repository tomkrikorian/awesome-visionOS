# Contributing

Thanks for helping keep this list useful for visionOS developers.

## What Belongs Here

Add resources that are useful to people building visionOS apps, RealityKit or ARKit experiences, immersive media workflows, spatial interfaces, or Apple Vision Pro developer tooling.

Prefer resources that are:

- Actively maintained or still technically relevant.
- Directly useful to visionOS developers.
- Open source when listed under Open Source.
- Specific enough to help a developer decide whether to click.

Avoid resources that are:

- Pure marketing pages with no developer value.
- Duplicates of existing entries.
- Abandoned experiments with no reusable idea, sample, or implementation detail.
- Generic Apple-platform resources with no clear visionOS relevance.

## Entry Format

Use one line per entry:

```md
- [Name](https://example.com) — One concise sentence describing why the project is useful. Tags: keyword1, keyword2.
```

Keep descriptions factual, short, and free of trailing promotional language.

## Category Guide

- Official: Apple documentation, WWDC sessions, and Apple sample code.
- Libraries: reusable packages and SDKs.
- Tools: developer utilities, debugging tools, asset pipeline tools, and build tooling.
- Projects: complete apps, examples, templates, prototypes, and research demos.
- Learning: communities, websites, newsletters, courses, and articles.
- Related Lists: other Awesome Lists that help visionOS developers.

If a resource fits more than one category, place it where a developer is most likely to look for it first.

## Pull Request Checklist

- The entry follows the standard format.
- The link works and points to the most useful page.
- The description explains developer value in one sentence.
- Tags are concise and consistent with nearby entries.
- The resource is placed in the most specific category.
- No duplicate entry already exists.

## Local Checks

Run the Awesome List lint before opening a pull request:

```sh
npm install
npm run lint
```

The GitHub Actions workflow also checks links with Lychee. The local lint keeps the prompt-required entry format enforceable and runs `awesome-lint` with documented allowances for rules that conflict with this repository's chosen style.
