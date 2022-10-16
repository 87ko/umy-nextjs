/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/personal",
                destination: "/multipage?step=1",
            },
            {
                source: "/confirm",
                destination: "/multipage?step=2",
            },
        ]
    },
}

module.exports = nextConfig
