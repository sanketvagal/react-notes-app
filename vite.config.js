import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	alias: {
		'@': require('path').resolve(__dirname, 'src')
	},
	define: viteEnv,
	plugins: [react()]
})

const viteEnv = {}
Object.keys(process.env).forEach((key) => {
	if (key.startsWith(`VITE_`)) {
		viteEnv[`import.meta.env.${key}`] = process.env[key]
	}
})

