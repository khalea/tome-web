# 📚 Tome

### Introduction

Tome is a text-based Role-Play Game (RPG) making use of OpenAI's ChatGPT for narrative interactions and development. The goal is to enable players to build their own narrative adventures as they go, engaging with the world via natural language. **This repository houses the web chat ui & backend.**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Install & Run

Using the command line, navigate to a folder where you want the project to be installed (ie. Projects). Clone the repository:

`> git clone https://github.com/khalea/tome.git`

Create a `.env` file in the root of the project folder and add your OpenAI API key:

`OPENAI_API_KEY="REPLACE_TEXT_WITH_KEY"`

> _This file will be ignored by Git for security purposes, by default. Do not remove `.env` from the `.gitignore` file._

Navigate to the repository folder on your computer and run the following:

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
