import LogoImg from '../../resources/Logo.svg';
import './Logo.scss'

const Logo = () => {
    return (
        <div className="logo">
        <img src={LogoImg} alt="Logo" />
        </div>
    );
}

export default Logo;