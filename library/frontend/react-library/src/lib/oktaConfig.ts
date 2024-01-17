export const oktaConfig = {
    clientId: "0oaehxzmbpRWI26zz5d7",
    issuer: "https://dev-97198155.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true,
};
