export type Technology = {
  name: string;
  icon: string;
  url: string;
};

export const stackIcons: { [key: string]: Technology } = {
  react: {
    name: "React",
    icon: "/stackIcons/react.svg",
    url: "https://fr.react.dev/",
  },
  reactnative: {
    name: "React Native",
    icon: "/stackIcons/react.svg",
    url: "https://reactnative.dev/",
  },
  c: {
    name: "C",
    icon: "/stackIcons/c.svg",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  cpp: {
    name: "C++",
    icon: "/stackIcons/cpp.svg",
    url: "https://fr.wikipedia.org/wiki/C%2B%2B",
  },
  typescript: {
    name: "Typescript",
    icon: "/stackIcons/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  nestjs: {
    name: "NestJs",
    icon: "/stackIcons/nestjs.svg",
    url: "https://nestjs.com/",
  },
  git: {
    name: "Git",
    icon: "/stackIcons/git.svg",
    url: "https://git-scm.com/",
  },
  tailwind: {
    name: "Tailwind",
    icon: "/stackIcons/tailwind.svg",
    url: "https://tailwindcss.com/",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "/stackIcons/postgresql.svg",
    url: "https://www.postgresql.org/",
  },
  zod: {
    name: "Zod",
    icon: "/stackIcons/zod.svg",
    url: "https://zod.dev/",
  },
  postman: {
    name: "Postman",
    icon: "/stackIcons/postman.svg",
    url: "https://www.postman.com/",
  },
  supabase: {
    name: "supabase",
    icon: "/stackIcons/supabase.svg",
    url: "https://www.supabase.com/",
  },
  graphql: {
    name: "graphql",
    icon: "/stackIcons/graphql.svg",
    url: "https://www.graphql.org/",
  },
  prisma: {
    name: "prisma",
    icon: "/stackIcons/prisma.svg",
    url: "https://www.prisma.io/",
  },
  i18n: {
    name: "i18n",
    icon: "/stackIcons/i18n.svg",
    url: "https://www.i18next.com/",
  },
  linux: {
    name: "linux",
    icon: "/stackIcons/linux.svg",
    url: "https://www.linux.org/",
  },
  bash: {
    name: "bash",
    icon: "/stackIcons/bash.svg",
    url: "https://www.bash.org/",
  },
};
