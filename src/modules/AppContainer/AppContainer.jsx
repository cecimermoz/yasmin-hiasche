import React, { useContext, useEffect, useState } from 'react'
import Background from '../../components/background/Background'
import NavBar from '../../components/header/NavBar'
import Footer from '../../components/main/Footer'
import Main from '../../components/main/Main'
import Skeleton from '../../components/main/skeleton/Skeleton'
import { WebData } from '../../context/dataContext.jsx'

const AppContainer = () => {
  const { loading, setLoading, sectionOrdered } = useContext(WebData)
  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return loading ? (
    <Skeleton />
  ) : (
    sectionOrdered.length > 0 && (
      <NavBar sections={sectionOrdered} windowSize={windowSize}>
        <Background isPicOn setLoading={setLoading} previePics />
        <Main sectionsInfo={sectionOrdered} />
        <Footer />
      </NavBar>
    )
  )
}

export default AppContainer
