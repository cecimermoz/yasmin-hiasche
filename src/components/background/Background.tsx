import {
  BackgroundWrapper,
  Overlay,
  StyledGradient,
  StyledPic,
} from './Background.styles'
import { BackgroundPreview } from './BackgroundPreview'

export const Background = (props) => {
  const { isPicOn, previePics, setLoading } = props

  return (
    <BackgroundWrapper>
      <StyledGradient />
      {isPicOn && <StyledPic />}
      {previePics && <BackgroundPreview />}
      {/* {previePics && <BackgroundPreview onLoad={() => setLoading(true)} />} */}
      <Overlay />
    </BackgroundWrapper>
  )
}
