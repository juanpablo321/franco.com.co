export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID ?? "",
  contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  contentfulPreviewToken: process.env.CONTENTFUL_PREVIEW_TOKEN ?? "",
  contentfulEnvironment: process.env.CONTENTFUL_ENVIRONMENT ?? "master",
};
