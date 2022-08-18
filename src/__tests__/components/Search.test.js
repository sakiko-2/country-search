import {render, screen} from '@testing-library/react'
import Search from '../../components/Search'

describe('Search', () => {
  test('renders search for a country placeholder', () => {
    render(<Search />)
    const input = screen.getByPlaceholderText(/search for a country/i)
    expect(input).toBeInTheDocument()
  })
})
