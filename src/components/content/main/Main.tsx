import { SwitchSections } from '../SwitchSections'
import { Footer } from '../footer/Footer'
import { Title } from '../title/Title'
import { StyledMain, StyledSection } from './Main.styles'

export const Main = (props) => {
  const { sectionsInfo } = props

  return (
    <StyledMain>
      {sectionsInfo.map((sec, i) => {
        const idTitle = sec.title.replace(/ /g, '-')
        return (
          <StyledSection id={idTitle} key={i}>
            <Title title={sec.title} />
            <SwitchSections sectionData={sec} />
          </StyledSection>
        )
      })}
      <Footer />
    </StyledMain>
  )
}
