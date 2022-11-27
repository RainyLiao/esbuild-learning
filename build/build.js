import esbuild from "esbuild"

esbuild.buildSync({
  entryPoints: ["./src/index.js"],
  bundle: true,
  outdir: 'dist',
  define: {
    NODE_ENV: `"development"`,
  },
  inject: ['./build/process-shim.js'],
  format: 'cjs',
  loader: {
    '.png': 'dataurl',
    '.svg': 'text'
  },
  // minify: true,
  // minifyWhitespace: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  target: 'es6',
  platform: 'node'
});
