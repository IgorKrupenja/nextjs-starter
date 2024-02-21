# Next.js

Next.js starter project with the following:

- [Tailwind CSS](https://tailwindcss.com/).
- [shadcn/ui](https://ui.shadcn.com/) components and [Lucide](https://lucide.dev/guide/packages/lucide-react) icons.
- [React Hook Form](https://react-hook-form.com/) and for forms.
- [Zod](https://zod.dev/) for schema validation.
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/) for unit and component tests.
- [Playwright](https://playwright.dev/) for end-to-end tests.
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) with tailored configs.
- Custom VSCode [config](.vscode/settings.json).
- [GitHub Actions](https://github.com/features/actions) for running linter, formatter and tests.

The project has a few example pages and route handlers with tests, including a simple AI chat bot example, made with [OpenAI Node API Library
](https://github.com/openai/openai-node) and [Vercel AI SDK](https://sdk.vercel.ai/docs).

## Installation

1. Make sure you have Node.js 20 installed.
2. Install `pnpm`.

   ```bash
   corepack enable
   corepack prepare pnpm@latest --activate
   ```

3. Create a new project from this template.

   ```bash
   pnpm dlx degit IgorKrupenja/nextjs-starter my-billion-dollar-startup
   ```

4. Install dependencies.

   ```bash
   cd my-billion-dollar-startup
   pnpm install
   ```

5. If you want to use the chat bot example, copy `.env.example` to `.env.local` and add your OpenAI API key.

   ```bash
   cp .env.example .env.local
   ```

## Running

```bash
pnpm dev
```

## Testing

The starter project aims to have near-100% test coverage. You can run unit tests with:

```bash
pnpm test
```

And to check coverage:

```bash
pnpm test:coverage
```

The project also has Playwright set up for end-to-end tests, run with:

```bash
pnpm test:e2e
```

## CI

The project has [GitHub Actions](.github/workflows/) set up to run linter, formatter and tests. It runs on pushes to the `main` branch and pull requests that are not in draft status.

## Deployment

The easiest way would be to deploy to [Vercel](https://vercel.com/docs/frameworks/nextjs). No special configuration is needed except adding your OpenAI API key as a [variable](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#environment-variables-on-vercel) there.

<!-- todo repo structure -->

## To do

<!-- todo finish -->

- [ ] **Coming soon**: [Finish](https://github.com/IgorKrupenja/nextjs-starter/issues/1) the chat bot example UI.
- [ ] **Coming soon**: [Add more tests](https://github.com/IgorKrupenja/nextjs-starter/issues/6).
<!-- - [ ] -->
