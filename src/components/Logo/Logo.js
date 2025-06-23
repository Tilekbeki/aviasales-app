import PlanetImg from "../../resources/planet.svg";
import planeImg from "../../resources/plane.svg";
import "./Logo.scss";
import { useSelector } from "react-redux";

const Logo = () => {
  const { loading } = useSelector((state) => state.tickets);
  const classStatus = loading ? "rotating" : null;
  return (
    <div className="logo">
      <img src={PlanetImg} alt="Planet image" className={classStatus} />
      <img src={planeImg} alt="Plane Image" className="logo__plane" />
    </div>
  );
};

export default Logo;
