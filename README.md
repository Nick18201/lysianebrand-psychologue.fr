# Lysiane Brand Website

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Environment

Copy `.env.example` to `.env` and fill in the values.

```
STORYBLOK_ACCESS_TOKEN=
NUXT_STORYBLOK_VERSION=
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production (server)

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Production (static)

Build the application for production:

```bash
npm run generate
```

Locally preview production build:

```bash
npx serve .output/public
```

Final output is in `.output/public`

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
