import vuePlugin from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: './',
	plugins: [vuePlugin()],
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 5000,
	},
	css: {
		postcss: path.resolve(__dirname, './postcss.config.cjs'),
	},
	build: {
		outDir: 'build',
		rollupOptions: {
			input: {
				index: './index.html',
				privacy_policy: './privacy_policy.html',
			},
		},
	},
})
