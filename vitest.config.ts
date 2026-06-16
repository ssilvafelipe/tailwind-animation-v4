// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true, // Permite usar describe, it, expect sin importarlos
        environment: 'node',
        include: ['test/**/*.test.ts'], // Busca tests en la carpeta test/
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
        },
    },
})