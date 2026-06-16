// test/tests/index.test.ts
import { describe, it, expect } from 'vitest'
import * as fs from 'node:fs'
import * as path from 'node:path'

// Importamos directamente las exportaciones del tema
import {
    animations,
    keyframes,
    loadingAnimations,
    textAnimations
} from '../../src/theme'



describe('Tailwind Animation Plugin (Solo Animaciones)', () => {

    // 1
    it('debería exportar el objeto de animaciones base correctamente', () => {
        expect(animations).toBeDefined()
        expect(typeof animations).toBe('object')

        // Verificar algunas animaciones clave 
        expect(animations).toHaveProperty('fade-in')
        expect(animations).toHaveProperty('fade-out')
        expect(animations).toHaveProperty('bouncing')      // Cambiado de 'bounce' a 'bouncing'
        expect(animations).toHaveProperty('rotate-360')
        expect(animations).toHaveProperty('pulse-simple')   // Cambiado de 'pulse' a 'pulse-simple'
    })

    // 2
    it('debería exportar el objeto de keyframes base correctamente', () => {
        expect(keyframes).toBeDefined()
        expect(typeof keyframes).toBe('object')

        expect(keyframes).toHaveProperty('fade-in')
        expect(keyframes['fade-in']).toHaveProperty('0%')
        expect(keyframes['fade-in']).toHaveProperty('100%')
    })

    // 3
    it('debería exportar las animaciones de la Fase 1 (Loading, Text, etc.)', () => {
        expect(loadingAnimations).toHaveProperty('spin')
        expect(loadingAnimations).toHaveProperty('skeleton')

        expect(textAnimations).toHaveProperty('typing')
        expect(textAnimations).toHaveProperty('glitch')
    })


    // 4
    it('debería generar el archivo test/output.css con TODAS las animaciones resueltas', () => {
        const outputPath = path.resolve(__dirname, '../output.css')

        // 1. Verificar que el archivo existe
        expect(fs.existsSync(outputPath)).toBe(true)

        const cssContent = fs.readFileSync(outputPath, 'utf-8')

        // 2. Verificar que las variables de animación están en el CSS compilado       
        expect(cssContent).toContain('@layer theme')

        // 3. Verificar animaciones base (las 72 originales)
        expect(cssContent).toContain('--animate-fade-in:')
        expect(cssContent).toContain('--animate-fade-out:')
        expect(cssContent).toContain('@keyframes fade-in')
        expect(cssContent).toContain('@keyframes fade-out')

        // 4. Verificar animaciones de la Fase 1 (loading, text, hover, notifications)
        expect(cssContent).toContain('--animate-spin:')
        expect(cssContent).toContain('--animate-glitch:')
        expect(cssContent).toContain('--animate-toast-in:')
        expect(cssContent).toContain('--animate-lift:')
        expect(cssContent).toContain('@keyframes glitch')
        expect(cssContent).toContain('@keyframes toast-in')

        // 5. Verificar que las clases .animate-* también se generaron
        expect(cssContent).toContain('.animate-fade-in')
        expect(cssContent).toContain('.animate-spin')
        expect(cssContent).toContain('.animate-glitch')
        expect(cssContent).toContain('.animate-toast-in')
    })

    // 5
    it('NO debería contener utilidades o componentes de ejemplo (como .glass o .btn-brand)', () => {
        const outputPath = path.resolve(__dirname, '../output.css')
        const cssContent = fs.readFileSync(outputPath, 'utf-8')

        // Aseguramos que este build sea limpio y solo de animaciones
        expect(cssContent).not.toContain('.glass')
        expect(cssContent).not.toContain('.btn-brand')
    })
})