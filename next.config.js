module.exports = {
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/about": { page: "/about" },
			"/contact-me": { page: "/contact-me" },
			"/skills": { page: "/skills" },
		};
	},
};
