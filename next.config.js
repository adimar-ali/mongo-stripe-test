/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  env:{
    MONGODB_URL:"mongodb://localhost/test"
  }
}

module.exports = nextConfig
