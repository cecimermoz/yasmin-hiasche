import { useContext, useEffect, useState } from 'react'
import { WebData } from '../../context/dataContext'
import { Main, Skeleton } from '../../components/content'
import { NavBar } from '../../components/header'
import { Background } from '../../components/background/Background'

const AppContainer = () => {
  const { loading, setLoading, sectionOrdered } = useContext(WebData)
  const [windowSize, setWindowSize] = useState<number>()

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
        <Background setLoading={setLoading} previePics />
        <Main sectionsInfo={sectionOrdered} />
      </NavBar>
    )
  )
}

export default AppContainer
