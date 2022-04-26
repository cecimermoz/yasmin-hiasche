import { Typography } from '@material-ui/core'

const Section = ({ title, text }) => {
    let idTitle = title.replace(/ /g, '-')

    return (
        <section id={idTitle} title={title}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle1">{text}</Typography>
        </section>
    )
}

export default Section
