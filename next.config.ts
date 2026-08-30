import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,

	images: {
		domains: ["res.cloudinary.com"],
	},

	async redirects() {
		return [
			{
				source: "/preparat-dlia-pidvyshchennia-rodiuchosti-gruntu",
				destination: "/preparat-dlia-pidvyshchennia-rodiuchosti-gruntu-hleon",
				permanent: true,
			},
			{
				source: "/roduchist-gruntu",
				destination: "/preparat-dlia-pidvyshchennia-rodiuchosti-gruntu-hleon",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
