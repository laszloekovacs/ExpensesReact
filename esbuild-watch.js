require('esbuild')
	.build({
		entryPoints: ['./src/App.jsx'],
		bundle: true,
		outfile: './dist/App.js',
		watch: true,
	})
	.catch(() => process.exit(1));
