import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SwitchSections } from './SwitchSections'
import Title from './Title'

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(4),
    paddingBottom: 0,
    color: theme.palette.secondary.main,
    textAlign: 'center',
    maxWidth: '1200px',
    margin: 'auto',
  },
  subtitle: {
    marginBottom: theme.spacing(2),
  },
  mb: {
    margin: 'auto',
    marginBottom: theme.spacing(5),
    maxWidth: theme.breaks[8],
  },
}))

const Main = (props) => {
  const { sectionsInfo } = props
  const { main, subtitle, mb } = useStyles()

  return (
    <main className={main}>
      {sectionsInfo.map((sec, i) => {
        const idTitle = sec.title.replace(/ /g, '-')
        return (
          <section id={idTitle} key={i} className={mb}>
            <Title title={sec.title} className={subtitle} />
            <SwitchSections sectionData={sec} />
          </section>
        )
      })}
    </main>
  )
}

export default Main
