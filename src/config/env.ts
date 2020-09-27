const env = window.location.host === 'localhost:3000' ? 'development' : 'production'

const development = {
  apiUrl: 'http://18.192.54.250',
}

const production = {
  apiUrl: 'http://18.192.54.250',
}

const config: any = {
  development,
  production,
}

export default { ...config[env] }
