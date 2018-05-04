module.exports = {
	parser:'postcss-safe-parser',
	plugins: {
		'postcss-import': {},
		'postcss-cssnext': {//autoprefixer here
			browsers: ['last 2 versions', '> 5%'],
		},
		'postcss-csso': {},
	},
};