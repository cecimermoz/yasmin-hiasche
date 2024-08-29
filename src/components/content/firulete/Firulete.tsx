import { StyledFirulete } from './Firulete.styles'

export const Firulete = ({ children }) => {
  return (
    <>
      <StyledFirulete />
      {children}
      <StyledFirulete className="right" />
    </>
  )
}
