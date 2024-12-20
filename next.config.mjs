/** @type {import('next').NextConfig} */
const nextConfig = {
  //on viens définir une liste de pattern autorisés
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        //on vient définir le pattern de l'url
        pathname: "/t/p/w600_and_h900_bestv2/*",
      }
    ]
  }
};

export default nextConfig;
