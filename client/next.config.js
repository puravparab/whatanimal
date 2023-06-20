/** @type {import('next').NextConfig} */

module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	publicRuntimeConfig: {
		SERVER_URL:  process.env.SERVER_URL,
	},
}