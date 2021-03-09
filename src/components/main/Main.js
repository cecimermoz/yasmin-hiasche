import { makeStyles } from '@material-ui/core/styles';
import Section from './Section';

const useStyles = makeStyles({
    main: {
        background: 'linear-gradient(180deg, rgba(76, 31, 110, 1) 0%, rgba(141,13,152,1) 100%)',
        padding: '0 16px',
        color: '#FFEAF1',
    },
});

const Main = ({sections}) => {
    const classes = useStyles();
    return(
        <main className={classes.main}>
            { 
                sections.map((sec,i) => (
                    <Section title={sec.title} text={sec.content.text} key={i + sec.title}/>
                )) 
            }
        </main>
    )
}

export default Main;