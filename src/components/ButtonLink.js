import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  min-width: 7rem;
`

const ButtonLink = ({item, name}) => (
  <StyledLink
    to={`/country/${item}`}
    className="inline-block text-center rounded border px-4 py-1 m-0.5 bg-white drop-shadow-md"
  >
    {name(item)}
  </StyledLink>
)

export default ButtonLink
