import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('CSS Design System Compliance', () => {
  it('ensures --rexon-* CSS variables are properly defined', () => {
    const indexCssPath = path.resolve(process.cwd(), 'src/index.css')
    const indexCss = fs.readFileSync(indexCssPath, 'utf-8')

    // Verify key --rexon CSS variable aliases are defined in :root or CSS
    expect(indexCss).toContain('--rexon-accent')
    expect(indexCss).toContain('--rexon-bg')
    expect(indexCss).toContain('--rexon-border')
    expect(indexCss).toContain('--rexon-text')
    expect(indexCss).toContain('--rexon-transition')
  })

  it('ensures all sections have consistent padding and spacing rules', () => {
    const appCssPath = path.resolve(process.cwd(), 'src/App.css')
    const indexCssPath = path.resolve(process.cwd(), 'src/index.css')
    const appCss = fs.readFileSync(appCssPath, 'utf-8')
    const indexCss = fs.readFileSync(indexCssPath, 'utf-8')

    const combined = appCss + indexCss
    expect(combined).toContain('.section')
    expect(combined).toContain('.rexon-section')
  })
})
