
import { Button, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {palette, spacing, breakpoints} from '../themes/generalTheme';
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
      '& .MuiTextField-root': {
        margin: spacing(1),
        width: '25ch',
        '&:active, &:focus':{
            outline: 'white',
        }
      },
      '& label': {
        color: palette.secondary.main
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.secondary.main,
      },
      '& .MuiButton-outlined': {
        borderColor: palette.secondary.main,
        color: palette.primary.main,
        backgroundColor: palette.secondary.main,
        marginTop: spacing(2)
      },
    },
}));

const SectionContact = ({sectionData, className}) => {
    const classes = useStyles();
    console.log('Contactooos', sectionData)

    const sendMail = async e => {
      e.preventDefault();
      let infoMail = {
        name: e.target.[0].value,
        email: e.target.[2].value,
        text: e.target.[4].value,
      };
      //let form = await axios.post('/api/form', infoMail);
      console.log(infoMail)
    }
    
    return(
        <form className={`${classes.root} ${className}`} autoComplete="on" onSubmit={(e)=>sendMail(e)}>
            <TextField 
                required
                autoComplete="on"
                id="form-name"
                name="name"
                label="Nombre"
                size="small"            
                variant="outlined"
                type='text'
            />
            <TextField 
                required
                autoComplete="on"
                id="form-email"
                name="email"
                label="Email"
                size="small"            
                variant="outlined"
                type='email'
            />
            <TextField 
                required
                multiline
                rows={10}
                rowsMax={10}
                id="form-text"
                name="text"
                label="Consulta"
                size="small"            
                variant="outlined"
            />
            <Button variant="outlined" type='submit' >Enviar</Button>            
            
        </form>
    )
}

export default SectionContact;