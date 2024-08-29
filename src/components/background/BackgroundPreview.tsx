import BackgroundSlider from 'react-background-slider'
import p1 from '../../assets/previewPics/p1.jpg'
import p2 from '../../assets/previewPics/p2.jpg'
import p3 from '../../assets/previewPics/p3.jpg'
import p4 from '../../assets/previewPics/p4.jpg'
import p5 from '../../assets/previewPics/p5.jpg'
import p6 from '../../assets/previewPics/p6.jpg'
import p7 from '../../assets/previewPics/p7.jpg'
import p8 from '../../assets/previewPics/p8.jpg'

export const BackgroundPreview = () => {
  const arrayBackgroundPics = [p1, p2, p3, p4, p5, p6, p7, p8].sort(
    () => 0.5 - Math.random()
  )

  return (
    <BackgroundSlider
      images={arrayBackgroundPics}
      duration={4}
      transition={1}
    />
  )
}
