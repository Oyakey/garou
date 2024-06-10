module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@pages': './pages',
						'@components': './components',
						'@screens': './screens',
						'@scripts': './scripts',
						'@assets': './assets',
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			],
		],
	};
};
