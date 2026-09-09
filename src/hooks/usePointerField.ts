import { useEffect, useRef, type RefObject } from 'react'

export function usePointerField<T extends HTMLElement>(): RefObject<T | null> {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarsePointer = window.matchMedia('(pointer: coarse)')

    if (!element || reducedMotion.matches || coarsePointer.matches) return

    let frame = 0

    const updatePointer = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect()
        const x = ((event.clientX - bounds.left) / bounds.width) * 100
        const y = ((event.clientY - bounds.top) / bounds.height) * 100

        const shiftX = ((x - 50) * 0.09).toFixed(2)
        const shiftY = ((y - 50) * 0.065).toFixed(2)

        element.style.cssText = [
          `--pointer-x: ${x.toFixed(2)}%`,
          `--pointer-y: ${y.toFixed(2)}%`,
          `--q-shift-x: ${shiftX}px`,
          `--q-shift-y: ${shiftY}px`,
        ].join(';')
      })
    }

    element.addEventListener('pointermove', updatePointer, { passive: true })

    return () => {
      element.removeEventListener('pointermove', updatePointer)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return elementRef
}

