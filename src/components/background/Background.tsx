import { BackgroundWrapper, Overlay, StyledGradient } from './Background.styles'
import { BackgroundPreview } from './BackgroundPreview'

export const Background = (props) => {
  const { previePics } = props

  return (
    <BackgroundWrapper>
      <StyledGradient />
      {previePics && <BackgroundPreview />}
      <Overlay />
    </BackgroundWrapper>
  )
}
