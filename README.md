# Next.js

⚠️ **Warning**: This tool is a work in progress, there are a couple of [issues](#to-do) that
will be addressed in the nearest future.

Next.js starter/boilerplate project with the following:

- [Tailwind CSS](https://tailwindcss.com/).
- [shadcn/ui](https://ui.shadcn.com/) components and [Lucide](https://lucide.dev/guide/packages/lucide-react) icons.
- [React Hook Form](https://react-hook-form.com/) for forms.
- [Zod](https://zod.dev/) for schema validation.
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/) for unit and component tests.
- [Playwright](https://playwright.dev/) for end-to-end tests.
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) with tailored configs.
- Custom VSCode [config](.vscode/settings.json).
- [GitHub Actions](https://github.com/features/actions) for running linter, formatter and tests.
- Great match for your next billion-dollar startup 🚀

The project has a few example pages and route handlers with tests, including a simple AI chat bot example, made with [OpenAI Node API Library
](https://github.com/openai/openai-node) and [Vercel AI SDK](https://sdk.vercel.ai/docs). You can delete these if you don't need them.

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

5. If you want to use the chat bot example, create `.env.local` file and add your OpenAI API key to that file.

   ```bash
   cp .env.example .env.local
   ```

## Running

```bash
pnpm dev
```

## Testing

The starter project aims to have near-100% test coverage. Note that components inside [`src/components/ui`](src/components/ui) are [created](https://ui.shadcn.com/docs/installation/next) by the external `shadcn-ui` library and are thus not in scope for testing. You can run unit tests with:

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

## Structure

Inside the `src` folder:

```bash
src
├── app # App layout and homepage with chat bot example
│   ├── api
│   │   ├── chat # Sample route handler for chat bot
│   │   └── feedback # Sample route handler for form
│   └── feedback # Sample page with form
├── components # Components grouped by pages
│   ├── chat
│   ├── common
│   ├── feedback
│   └── ui # Re-usable components from shadcn-ui
├── declarations # TypeScript declarations, add types for .env variables here
├── e2e # Playwright end-to-end tests
├── interfaces
├── lib # Misc utilities
├── schemas # Zod schemas used for form and API validation
├── styles # shadcn-ui base config
└── test # Vitest setup and utils
```

## To do

- [ ] **Coming soon**: [Finish](https://github.com/IgorKrupenja/nextjs-starter/issues/1) the chat bot example UI.
- [ ] **Coming soon**: [Add more tests](https://github.com/IgorKrupenja/nextjs-starter/issues/6).
- [ ] Add support for [Supabase](https://github.com/IgorKrupenja/nextjs-starter/issues/17) and [Supabase Auth](https://github.com/IgorKrupenja/nextjs-starter/issues/18) (or similar).
- [ ] Add support for [Stripe](https://github.com/IgorKrupenja/nextjs-starter/issues/19). You next billion-dollar startup will need to make money, right? 😉
