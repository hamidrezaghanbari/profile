const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
    i18n,
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    env: {
        mongodb_username: 'hamidreza',
        mongodb_password: '137714hamid',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'ProfileDB_Dev',
        
        email_user: 'ghanbarih623@gmail.com',
        email_pass: '137714hamid',
        email_to: 'hamidrezaghanbari13@gmail.com'
    }
})