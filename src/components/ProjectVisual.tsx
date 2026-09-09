import type { ProjectVisual as ProjectVisualType } from '../content/site'
import { QzeybeiMark } from './BrandMark'

type ProjectVisualProps = {
  visual: ProjectVisualType
}

function MotionVisual() {
  return (
    <div className="visual-canvas motion-visual" aria-hidden="true">
      <span className="visual-label visual-label-top">Frame 0142</span>
      <span className="visual-label visual-label-bottom">x / y trajectory</span>
      <svg viewBox="0 0 800 520" fill="none">
        <path className="motion-grid" d="M80 80H720M80 180H720M80 280H720M80 380H720M170 55V445M330 55V445M490 55V445M650 55V445" />
        <path className="motion-path-shadow" d="M105 365C178 356 190 263 266 274C342 285 351 111 446 157C535 200 557 324 695 126" />
        <path className="motion-path" pathLength="1" d="M105 365C178 356 190 263 266 274C342 285 351 111 446 157C535 200 557 324 695 126" />
        <g className="motion-points">
          <circle cx="105" cy="365" r="7" />
          <circle cx="266" cy="274" r="7" />
          <circle cx="446" cy="157" r="7" />
          <circle cx="695" cy="126" r="7" />
        </g>
        <path className="motion-crosshair" d="M446 126V188M415 157H477" />
      </svg>
    </div>
  )
}

function CityVisual() {
  return (
    <div className="visual-canvas city-visual" aria-hidden="true">
      <span className="visual-label visual-label-top">Seed / QZ-2048</span>
      <span className="visual-label visual-label-bottom">Generated block 06</span>
      <svg viewBox="0 0 800 520" fill="none">
        <g className="city-grid">
          <path d="M65 365 397 174 736 369 405 460 65 365Z" />
          <path d="M132 327 470 426M199 288 538 407M266 250 605 388M333 211 672 369M133 385 465 194M201 404 532 213M269 423 600 252M337 442 668 291" />
        </g>
        <g className="city-buildings">
          <path d="m205 315 80-46 72 42-80 46-72-42Z" />
          <path d="m205 315 72 42v-86l-72-42v86Z" />
          <path d="m277 357 80-46v-86l-80 46v86Z" />
          <path d="m205 229 80-46 72 42-80 46-72-42Z" />

          <path d="m401 328 64-37 58 34-64 37-58-34Z" />
          <path d="m401 328 58 34v-137l-58-34v137Z" />
          <path d="m459 362 64-37V188l-64 37v137Z" />
          <path d="m401 191 64-37 58 34-64 37-58-34Z" />

          <path d="m518 365 53-30 48 28-53 30-48-28Z" />
          <path d="m518 365 48 28v-72l-48-28v72Z" />
          <path d="m566 393 53-30v-72l-53 30v72Z" />
          <path d="m518 293 53-30 48 28-53 30-48-28Z" />
        </g>
      </svg>
    </div>
  )
}

function GymVisual() {
  return (
    <div className="visual-canvas gym-visual" aria-hidden="true">
      <span className="visual-label visual-label-top">Today / 19:42</span>
      <div className="gym-phone">
        <div className="gym-phone-top">
          <span>Gym Party</span>
          <span>03</span>
        </div>
        <p>Who showed up?</p>
        <div className="gym-people">
          <span className="gym-person is-here">K</span>
          <span className="gym-person is-here">A</span>
          <span className="gym-person">M</span>
          <span className="gym-person is-here">E</span>
        </div>
        <div className="gym-action"><span>Check in</span><span>+</span></div>
      </div>
      <span className="visual-label visual-label-bottom">3 friends checked in</span>
    </div>
  )
}

function QSystemVisual() {
  return (
    <div className="visual-canvas q-system-visual" aria-hidden="true">
      <span className="visual-label visual-label-top">System / Indexing</span>
      <div className="q-system-orbit">
        <QzeybeiMark />
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="orbit-point point-one" />
        <span className="orbit-point point-two" />
      </div>
      <div className="q-system-lines">
        <span />
        <span />
        <span />
      </div>
      <span className="visual-label visual-label-bottom">Thoughts / Context / Action</span>
    </div>
  )
}

export function ProjectVisual({ visual }: ProjectVisualProps) {
  if (visual === 'motion') return <MotionVisual />
  if (visual === 'city') return <CityVisual />
  if (visual === 'gym') return <GymVisual />
  return <QSystemVisual />
}
