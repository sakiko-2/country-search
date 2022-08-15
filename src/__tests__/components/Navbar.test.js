import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from '../../components/Navbar'

describe('Navbar', () => {
  test('renders where in the world link', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    const linkElement = screen.getByRole('link', {name: /where in the world/i})
    expect(linkElement).toBeInTheDocument()
  })

  test('renders dark mode text', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    const text = screen.getByText(/dark mode/i)
    expect(text).toBeInTheDocument()
  })
})
