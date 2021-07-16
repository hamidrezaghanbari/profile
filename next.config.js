const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    env: {
        mongodb_username: 'hamidreza',
        mongodb_password: '137714hamid',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'ProfileDB_Dev'
    }
})