import { defineConfig } from 'tsup'
import { copyFileSync, cpSync } from 'node:fs'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'], // Genera CommonJS y ES Modules
    dts: true,  // Genera archivos de declaración (.d.ts)
    clean: true,  // Limpia la carpeta dist antes de compilar
    external: ['tailwindcss'], // Nunca empaquetar Tailwind
    treeshake: true,
    minify: false,
    splitting: false,
    sourcemap: true,
    // Copiar theme.css a dist/ después del build
    onSuccess: async () => {

        // 1. Copiar el archivo principal de tema
        copyFileSync('src/theme.css', 'dist/theme.css')

        // 2. Copiar TODA la carpeta de módulos de tema (loading.css, text.css, etc.)
        cpSync('src/generated', 'dist/generated', { recursive: true })

        console.log('✅ Archivos de tema copiados correctamente a dist/')
    },
},
)