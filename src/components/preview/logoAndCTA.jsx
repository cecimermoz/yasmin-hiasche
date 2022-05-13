import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { WebData } from '../../context/dataContext';

const useStyles = makeStyles(() => ({
  logoWrapper:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh'
  },
  logo:{
    height: '20vh',
    width: '30%',
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Estudio%20de%20DanzasYasmin%20Hiasche-1.png?alt=media&token=ed44cac9-462a-4cc8-930c-fd00ccaff737)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain', 
  },
  button:{
  },

}))

const LogoCTA = () => {
  const { button, logo, logoWrapper } = useStyles()
  const { handleBackgroundPreview } = useContext(WebData)


  return (
    <div className={logoWrapper} >
      <div className={logo} />
      <button className={button} onClick={handleBackgroundPreview} >alkalal</button>
    </div>
  );
}

export default LogoCTA;
