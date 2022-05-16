import React from 'react'
import BackgroundSlider from 'react-background-slider'


const BackgroundPreview = () => {
    
  const arrayBackgroundPics = [
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/16711626_10210666486833501_3082815882271337721_n.jpg?alt=media&token=212cd664-4f55-4984-b912-d540792dd229',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/779.jpg?alt=media&token=a2ab745b-c5b0-4907-8987-0aedbad234fb',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-30.jpg?alt=media&token=3a8579b6-0485-4bde-b5f4-8aa9aea2b5b3',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-44.jpg?alt=media&token=cb84c3c3-0947-4183-81be-8b799dda5249',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/760.jpg?alt=media&token=2abff369-79a7-4144-90aa-35ba0845c795',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/455.jpg?alt=media&token=bf092a44-d603-4fbf-827f-0b372f642e3f',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/72336011_10218312532899874_5572839878967689216_o.jpg?alt=media&token=8e8d5746-7035-47a2-969f-aa3f263277bd',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-44.jpg?alt=media&token=f0745174-01c8-47a8-bf4e-1fe756fd9f36',
  ].sort(() => 0.5 - Math.random());

  return(
    <BackgroundSlider images={arrayBackgroundPics} duration={4} transition={1} />
  )
}

export default BackgroundPreview;