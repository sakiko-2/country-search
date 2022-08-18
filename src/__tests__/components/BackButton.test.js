import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import BackButton from '../../components/BackButton'

describe('BackButton', () => {
  test('renders back text', () => {
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>,
    )
    const button = screen.getByRole('button', {name: /back/i})
    expect(button).toBeInTheDocument()
  })
})
