import vuePlugin from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: './',
	plugins: [vuePlugin()],
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
