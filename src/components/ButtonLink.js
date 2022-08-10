import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  min-width: 5.5rem;

  @media (min-width: 640px) {
    min-width: 7rem;
  }
`

const ButtonLink = ({item, name}) => (
  <StyledLink
    to={`/country/${item}`}
    className="inline-block text-center rounded border px-4 py-1 m-0.5 bg-white drop-shadow-md text-sm sm:text-base dark:bg-[color:var(--dark-blue)] dark:border-[color:var(--mostly-black-blue)] dark:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] dark:focus:outline-0 dark:focus:border-indigo-500"
  >
    {name(item)}
  </StyledLink>
)

export default ButtonLink
