import Keycloak from 'keycloak-js';
const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK,
    realm: 'itb-ecors',
    clientId: 'itb-ecors-kk2'
};
const keycloak = new Keycloak(keycloakConfig);

const HOME_URL =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? import.meta.env.VITE_LOCALHOST_URL
    : import.meta.env.VITE_BASE_URL;

export async function requiredAuth() {
    const authenticated = await keycloak.init({
        onLoad: 'login-required',
        checkLoginIframe: false,
    });

    if (!authenticated) {
        await keycloak.login();
        return;
    }
}

export function tokenAuth() {
    return keycloak.tokenParsed || {};
}

export function logoutAuth() {
    keycloak.logout({
      redirectUri: HOME_URL,
    });
}