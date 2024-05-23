import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'


// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "",
    plugins: [dts({
        entryRoot: './src/lib',
        rollupTypes: true,
    })],
    build: {
        lib: {
            entry: './src/lib/index.ts',
            formats: ['es', "umd"],
            name: 'LIB',
            fileName: (format) => `index.${format}.js`,
        }
    }
})
