const config = {
  providers: [
    {
      domain:
        process.env.CLERK_CONVEX_ISSUER ??
        "https://growing-moccasin-15.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};

export default config;
