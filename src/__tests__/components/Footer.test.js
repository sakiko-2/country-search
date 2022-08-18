import {render, screen} from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Footer', () => {
  test('renders copyright text', () => {
    render(<Footer />)
    const footer = screen.getByText(/copyright 2022/i)
    expect(footer).toBeInTheDocument()
  })
})
