import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import { animations, keyframes } from '../theme/animations'
import { loadingAnimations, loadingKeyframes } from '../theme/loading'
import { textAnimations, textKeyframes } from '../theme/text'
import { hoverAnimations, hoverKeyframes } from '../theme/hover'
import { notificationAnimations, notificationKeyframes } from '../theme/notifications'
import { animationDelay, animationDuration } from '../theme/delays'
import { animationEasing } from '../theme/easings'

type AnimationMap = Record<string, string>
type KeyframeMap = Record<string, Record<string, Record<string, string>>>

function generateKeyframeCSS(name: string, keyframeObj: Record<string, Record<string, string>>): string {
    const steps = Object.entries(keyframeObj)
        .map(([percent, styles]) => {
            const cssProps = Object.entries(styles)
                .map(([prop, value]) => `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
                .join(' ')
            return `${percent} { ${cssProps} }`
        })
        .join(' ')
    return `@keyframes ${name} { ${steps} }`
}

function generateThemeBlock(animations: AnimationMap): string {
    return `@theme inline {\n${Object.entries(animations).map(([n, v]) => `    --animate-${n}: ${v};`).join('\n')}\n}`
}

function generateModuleCSS(animations: AnimationMap, keyframes: KeyframeMap, headerComment: string): string {
    return `${headerComment}\n\n${generateThemeBlock(animations)}\n\n${Object.entries(keyframes).map(([n, obj]) => generateKeyframeCSS(n, obj)).join('\n')}\n`
}

function generateUtilityModuleCSS(moduleName: string, values: Record<string, string | number>, headerComment: string): string {
    return `${headerComment}\n\n@theme inline {\n${Object.entries(values).map(([k, v]) => `    --${moduleName}-${k}: ${v};`).join('\n')}\n}\n`
}

function generateTestApplyCSS(animationModules: any[], utilityModules: any[]) {
    let css = `/* ARCHIVO GENERADO AUTOMÁTICAMENTE - NO EDITAR */\n\n`
    animationModules.forEach(({ name, animations }: any) => {
        css += `\n/* === Módulo: ${name} === */\n`
        Object.keys(animations).forEach(animName => css += `.animate-${animName} { @apply animate-${animName}; }\n`)
    })

    const delay = utilityModules.find((m: any) => m.name === 'animation-delay')
    if (delay) {
        css += `\n/* === Delays === */\n`
        Object.keys(delay.values).forEach(v => css += `.animate-delay-${v} { @apply animate-delay-${v}; }\n`)
    }

    const duration = utilityModules.find((m: any) => m.name === 'animation-duration')
    if (duration) {
        css += `\n/* === Durations === */\n`
        Object.keys(duration.values).forEach(v => css += `.animate-duration-${v} { @apply animate-duration-${v}; }\n`)
    }

    // ✅ Actualizado a anim-ease
    const ease = utilityModules.find((m: any) => m.name === 'animation-ease')
    if (ease) {
        css += `\n/* === Easings === */\n`
        Object.keys(ease.values).forEach(v => css += `.animate-ease-${v} { @apply animate-ease-${v}; }\n`)
    }
    return css
}

function generateAnimationsJSON(animationModules: any[], utilityModules: any[]) {
    const data: Record<string, string[]> = { base: [], loading: [], text: [], hover: [], notifications: [], delays: [], durations: [], easings: [] }
    const map: Record<string, keyof typeof data> = { 'animations': 'base', 'loading': 'loading', 'text': 'text', 'hover': 'hover', 'notifications': 'notifications' }

    animationModules.forEach(({ name, animations }: any) => { if (map[name]) data[map[name]] = Object.keys(animations).sort() })

    const delay = utilityModules.find((m: any) => m.name === 'animation-delay')
    if (delay) data.delays = Object.keys(delay.values).sort()

    const duration = utilityModules.find((m: any) => m.name === 'animation-duration')
    if (duration) data.durations = Object.keys(duration.values).sort()

    const ease = utilityModules.find((m: any) => m.name === 'animation-ease')
    if (ease) data.easings = Object.keys(ease.values).sort() // ✅ Agregado

    return JSON.stringify(data, null, 2)
}

function main() {
    const generatedDir = path.resolve(__dirname, '../generated')
    const srcDir = path.resolve(__dirname, '..')
    const testDir = path.resolve(__dirname, '../../test')

    if (!fs.existsSync(generatedDir)) fs.mkdirSync(generatedDir, { recursive: true })

    console.log('🚀 Iniciando generación de CSS...\n')

    const animationModules = [
        { name: 'animations', animations, keyframes, comment: '/* Animaciones base */' },
        { name: 'loading', animations: loadingAnimations, keyframes: loadingKeyframes, comment: '/* Loading */' },
        { name: 'text', animations: textAnimations, keyframes: textKeyframes, comment: '/* Texto */' },
        { name: 'hover', animations: hoverAnimations, keyframes: hoverKeyframes, comment: '/* Hover */' },
        { name: 'notifications', animations: notificationAnimations, keyframes: notificationKeyframes, comment: '/* Notificaciones */' }
    ]

    animationModules.forEach(({ name, animations, keyframes, comment }) => {
        fs.writeFileSync(path.join(generatedDir, `${name}.css`), generateModuleCSS(animations, keyframes, comment), 'utf-8')
        console.log(`✅ Animación: ${name}.css`)
    })

    // ✅ Actualizado a animation-ease
    const utilityModules = [
        { name: 'animation-delay', values: animationDelay, comment: '/* Delays */' },
        { name: 'animation-duration', values: animationDuration, comment: '/* Durations */' },
        { name: 'animation-ease', values: animationEasing, comment: '/* Easings */' }
    ]

    utilityModules.forEach(({ name, values, comment }) => {
        fs.writeFileSync(path.join(generatedDir, `${name}.css`), generateUtilityModuleCSS(name, values, comment), 'utf-8')
        console.log(`✅ Utilidad: ${name}.css`)
    })

    const allModules = [...animationModules, ...utilityModules]
    fs.writeFileSync(path.join(srcDir, 'theme.css'), `/* TAILWIND THEME - GENERADO AUTOMÁTICAMENTE */\n\n${allModules.map(m => `@import "./generated/${m.name}.css";`).join('\n')}\n`, 'utf-8')
    console.log(`✅ Principal: src/theme.css`)

    fs.writeFileSync(path.join(testDir, 'all-animations.css'), generateTestApplyCSS(animationModules, utilityModules), 'utf-8')
    console.log(`✅ Pruebas: test/all-animations.css`)

    fs.writeFileSync(path.join(testDir, 'animations-data.json'), generateAnimationsJSON(animationModules, utilityModules), 'utf-8')
    console.log(`✅ Laboratorio: test/animations-data.json`)

    console.log(`\n🎉 Generación completa`)
}

main()