import logo from "../../assets/img/Estudio de DanzasYasmin Hiasche-1.png";
import LogoWrapper from '../styled-components/header/LogoWrapper';

const Logo = () => {

    return(
        <LogoWrapper>
            <img src={logo} title={"Estudio de Danzas Yasmin Hiasche"} alt={"Estudio de Danzas Yasmin Hiasche"} />
        </LogoWrapper>
    );

}

export default Logo;