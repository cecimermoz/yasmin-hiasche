import { SwitchSections } from '../SwitchSections'
import { Title } from '../title/Title'
import { StyledMain } from './Main.styles'

export const Main = (props) => {
  const { sectionsInfo } = props

  return (
    <StyledMain>
      {sectionsInfo.map((sec, i) => {
        const idTitle = sec.title.replace(/ /g, '-')
        return (
          <section id={idTitle} key={i} className="mb">
            <Title title={sec.title} />
            <SwitchSections sectionData={sec} />
          </section>
        )
      })}
    </StyledMain>
  )
}
