# MultiUI Component Template

This is an official starter template for creating a component for MultiUI.

## What's inside

This project is a monorepo that contains Next.js, Vue, Svelte and Angular apps.
In a sense, you create components in the `packages` directory and then use them in the `apps` directory.

## How do I get started?

We recommend you read our documentation on creating a component for MultiUI:
https://multiui.org/docs/components/create-component

To get started, create your first component, then run the following command:

```sh
npm run dev
```

This will start a development server using [Turborepo](https://turbo.build/repo).
There should be 5 instances running:

- Next.js App
- Vue App
- Svelte App
- Angular App
- TypeScript dev server watching your component!

## Buidling, testing and linting

We use [turbo](https://turbo.build/repo) to manage our monorepo.
<br />
test your component, run the following command:

```sh
npm run test
```

build your component, run the following command:

```sh
npm run build
```

lint your component, run the following command:

```sh
npm run lint
```

## Publishing

To publish your component, we recommend you read our documentation on publishing a component for MultiUI:
https://multiui.org/docs/components/publish-component
