const env =
  window.location.host === 'admin.yolda.com'
    ? 'production'
    : window.location.host === 'admin.alfa.yolda.io'
    ? 'development'
    : 'development'

const development = {
  apiUrl: 'https://alfa.api.yolda.io',
  googleAnalyticsId: 'empty',
  hotJarId: '123',
  APIKey: 'R9cmDAPa3i4HbWhEI8qIJ6BcDv7cSqTK1M4C71dQ',
  aws: {
    identityPoolId: 'eu-central-1:6f4ac458-bb8e-434c-879d-ef9a9afd67f3',
    region: 'eu-central-1',
    identityPoolRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_tA4fi8Pha',
    userPoolWebClientId: '4j5d2o1tkhh40h7jlpljg8nfkk',
    mandatorySignIn: false,
    authenticationFlowType: 'USER_SRP_AUTH',
  },
}

const test = {
  apiUrl: 'https://beta.api.yolda.io',
  googleAnalyticsId: 'empty',
  hotJarId: '123',
  APIKey: 'R9cmDAPa3i4HbWhEI8qIJ6BcDv7cSqTK1M4C71dQ',
  aws: {
    identityPoolId: 'eu-central-1:5b8fb57b-ead0-4e1c-ad31-a4cb53a774bb',
    region: 'eu-central-1',
    identityPoolRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_uhmQLQqNB',
    userPoolWebClientId: '3ea6sjf9he2b0gu62ft39mg0mj',
    mandatorySignIn: false,
    authenticationFlowType: 'USER_SRP_AUTH',
  },
}

const production = {
  apiUrl: 'https://api.yolda.com',
  googleAnalyticsId: 'UA-163823803-2',
  hotJarId: '1771736',
  APIKey: '7TqfHdi5pJ3xcUHMogQB63dsnZygXCST6IO8TU93',
  aws: {
    identityPoolId: 'eu-central-1:43f3fd49-69ba-4b30-a74f-34cfe206f8d9',
    region: 'eu-central-1',
    identityPoolRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_Y2sKYfu3m',
    userPoolWebClientId: '1gm78gi47t9mlmcte6kefklvhg',
    mandatorySignIn: false,
    authenticationFlowType: 'USER_SRP_AUTH',
  },
}

const config: any = {
  development,
  production,
  test,
}

export default { ...config[env] }
