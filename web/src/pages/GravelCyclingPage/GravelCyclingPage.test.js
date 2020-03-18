import { render, cleanup } from '@testing-library/react'

import GravelCyclingPage from './GravelCyclingPage'

describe('GravelCyclingPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<GravelCyclingPage />)
    }).not.toThrow()
  })
})
