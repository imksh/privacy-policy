const appConfig = {
  app: {
    name: "GSTHisab – Legal & Privacy",
    logo: "/favicon.svg",
    shortName: "GSTHisab",
    description: "Official Privacy Policy & Legal Portal for GSTHisab – GST Invoice Maker Android Application.",
    version: "1.0.0",
    author: "GSTHisab Developer Team",
  },

  api: {
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
  },

  routes: {
    home: "/",
    login: "/login",
    profile: "/profile",
  },

  pagination: {
    pageSize: 10,
  },

  github: {
    repository: "",
  },

  social: {
    website: "",
    linkedin: "",
    github: "",
    twitter: "",
  },

  features: {
    darkMode: true,
    notifications: true,
    sidebar: true,
  },
};

export default appConfig;