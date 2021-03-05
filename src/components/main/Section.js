import { Typography } from '@material-ui/core';

const Section = ({title, text}) => {
    return(
        <section>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle1">{text}</Typography>
        </section>
    )
}

export default Section;