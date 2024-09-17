import p1 from '../../assets/previewPics/p1.webp'
import p2 from '../../assets/previewPics/p2.webp'
import p3 from '../../assets/previewPics/p3.webp'
import p4 from '../../assets/previewPics/p4.webp'
import p5 from '../../assets/previewPics/p5.webp'
import p6 from '../../assets/previewPics/p6.webp'
import p7 from '../../assets/previewPics/p7.webp'
import p8 from '../../assets/previewPics/p8.webp'
import p9 from '../../assets/previewPics/p9.webp'
import p10 from '../../assets/previewPics/p10.webp'
import p11 from '../../assets/previewPics/p11.webp'
import p13 from '../../assets/previewPics/p13.webp'
import p14 from '../../assets/previewPics/p14.webp'
import { BackgroundImage } from './Background.styles'
import React from 'react'

export const BackgroundPreview = () => {
  const arrayBackgroundPics = [
    p1,
    p2,
    p3,
    p4,
    p5,
    // p6, MALA CALIDAD
    p7,
    p8,
    p9,
    p10,
    p11,
    p13,
    p14,
  ].sort(() => 0.5 - Math.random())
  const [isVisible, setIsVisible] = React.useState(true)
  const [image, setImage] = React.useState(arrayBackgroundPics[0])

  const changeBackgroundImage = () => {
    setIsVisible(false)

    setTimeout(() => {
      setImage((prevImage) => {
        let newImage =
          arrayBackgroundPics[
            Math.floor(Math.random() * arrayBackgroundPics.length)
          ]
        while (newImage === prevImage) {
          newImage =
            arrayBackgroundPics[
              Math.floor(Math.random() * arrayBackgroundPics.length)
            ]
        }
        return newImage
      })
      setIsVisible(true)
    }, 500) // Tiempo para el fade-out antes de cambiar la imagen
  }

  React.useEffect(() => {
    const interval = setInterval(changeBackgroundImage, 5000)

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval)
  }, [arrayBackgroundPics])

  return <BackgroundImage url={image} isVisible={isVisible} />
}
