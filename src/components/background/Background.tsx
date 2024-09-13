import {
  BackgroundWrapper,
  Overlay,
  StyledGradient,
  StyledPic,
} from './Background.styles'
import { BackgroundPreview } from './BackgroundPreview'

export const Background = (props) => {
  const { previePics, setLoading } = props

  return (
    <BackgroundWrapper>
      <StyledGradient />
      {/* {isPicOn && <StyledPic />} */}
      {previePics && <BackgroundPreview />}
      <Overlay />
    </BackgroundWrapper>
  )
}
