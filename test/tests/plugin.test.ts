// test/tests/plugin.test.ts
import { describe, it, expect } from 'vitest'
import { generatePluginCSS } from '../utils/generatePluginCSS'

// Helper para normalizar espacios en el CSS
const normalize = (css: string) => css.replace(/\s+/g, ' ').trim()

describe('Tailwind Plugin Utilities (Generación de CSS)', () => {

    it('debería generar la utilidad animate-delay-100 correctamente', async () => {
        const css = await generatePluginCSS({
            content: '<div class="animate-delay-100">Hello</div>'
        })

        const normalized = normalize(css)
        expect(normalized).toContain('.animate-delay-100')
        expect(normalized).toMatch(/animation-delay:\s*100ms/)
    })

    it('debería generar la utilidad animate-duration-1000 correctamente', async () => {
        const css = await generatePluginCSS({
            content: '<div class="animate-duration-1000">Hello</div>'
        })

        const normalized = normalize(css)
        expect(normalized).toContain('.animate-duration-1000')
        expect(normalized).toMatch(/animation-duration:\s*1000ms/)
    })

    it('debería generar animaciones base con sus keyframes', async () => {
        const css = await generatePluginCSS({
            content: '<div class="animate-fade-in">Hello</div>'
        })

        const normalized = normalize(css)
        expect(normalized).toContain('.animate-fade-in')
        expect(normalized).toContain('@keyframes fade-in')
    })

    it('debería permitir combinar animación + delay + duration', async () => {
        const css = await generatePluginCSS({
            content: '<div class="animate-bounce animate-delay-500 animate-duration-2000">Hello</div>'
        })

        const normalized = normalize(css)
        expect(normalized).toContain('.animate-bounce')
        expect(normalized).toContain('.animate-delay-500')
        expect(normalized).toContain('.animate-duration-2000')
        expect(normalized).toMatch(/animation-delay:\s*500ms/)
        expect(normalized).toMatch(/animation-duration:\s*2000ms/)
    })

    it('debería permitir duracion nombradas', async () => {
        const css = await generatePluginCSS({
            content: '<div class="animate-bounce animate-delay-500 animate-duration-faster">Hello</div>'
        })

        const normalized = normalize(css)
        expect(normalized).toContain('.animate-bounce')
        expect(normalized).toContain('.animate-delay-500')
        expect(normalized).toContain('.animate-duration-faster')
        expect(normalized).toMatch(/animation-delay:\s*500ms/)
        expect(normalized).toMatch(/animation-duration:\s*100ms/)
    })
})


describe('Easings personalizados', () => {
    it('debería generar animate-ease-linear correctamente', async () => {
        const css = await generatePluginCSS({
            inline: '.test { @apply animate-ease-linear; }'
        })
        const normalized = normalize(css)

        // Verificar que la clase de utilidad existe (sin depender de @apply)
        expect(normalized).toMatch(/\.animate-ease-linear\s*\{[^}]*animation-timing-function:\s*linear[^}]*\}/)
    })

    it('debería generar animate-ease-spring (personalizado)', async () => {
        const css = await generatePluginCSS({
            inline: '.test { @apply animate-ease-spring; }'
        })
        const normalized = normalize(css)

        expect(normalized).toMatch(/\.animate-ease-spring\s*\{[^}]*animation-timing-function:\s*cubic-bezier\(0\.175,\s*0\.885,\s*0\.32,\s*1\.275\)[^}]*\}/)
    })

    it('debería generar animate-ease-bounce (personalizado)', async () => {
        const css = await generatePluginCSS({
            inline: '.test { @apply animate-ease-bounce; }'
        })
        const normalized = normalize(css)

        expect(normalized).toMatch(/\.animate-ease-bounce\s*\{[^}]*animation-timing-function:\s*cubic-bezier\(0\.34,\s*1\.56,\s*0\.64,\s*1\)[^}]*\}/)
    })


})