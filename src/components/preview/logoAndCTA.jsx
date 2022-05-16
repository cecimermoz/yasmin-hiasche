import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { WebData } from '../../context/dataContext';
import Firulete from '../main/util/Firulete';

const useStyles = makeStyles((theme) => ({
  logoWrapper:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh'
  },
  logo:{
    height: '20vh',
    width: '35%',
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Estudio%20de%20DanzasYasmin%20Hiasche-1.png?alt=media&token=ed44cac9-462a-4cc8-930c-fd00ccaff737)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain', 
  },
  tittle:{
    fontWeight: 400,
    fontFamily: 'Nunito Sans, sans-serif',
    textTransform: 'uppercase',
    color: theme.palette.secondary.main,
    fontSize: '20px',
  },
  firuleteGeneral:{
    width: '15%',
    height: '100%',
    position: 'absolute',
    left: '-18%',
    top: '30%',
  },
  firuleteRight:{
    right: '-18%',
    left: 'auto'
  },
  button:{
    border: 0,
    fontSize: '16px',
    width: '70%',
    borderRadius: '15px',
    maxWidth: '180px',
    padding: '10px 15px',
    marginTop: '30px',
    fontWeight: 700,
    background: `linear-gradient(90deg, ${theme.palette.primary050} 0%, ${theme.palette.ceci050} 100%)`,
    textTransform: 'uppercase',
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    '&:hover':{
      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.ceci} 100%)`,
    }
  }
}))

const LogoCTA = () => {
  const { button, logo, logoWrapper, tittle, firuleteGeneral, firuleteRight } = useStyles()
  const { handleBackgroundPreview } = useContext(WebData)

  return (
    <div className={logoWrapper} >
      <div className={logo} />
      <div style={{position: 'relative'}}>
        <Firulete customClasses={{general: firuleteGeneral, rigth: firuleteRight}}>
          <h1 className={tittle}>
            Egresada de la escuela de <strong>saida</strong>
            <br />
            integrante del ballet <strong>rakkasah</strong>
          </h1>
        </Firulete>  
      </div>
      <button className={button} onClick={handleBackgroundPreview} >Ingresar</button>
    </div>
  );
}

export default LogoCTA;
