import "./VerticalMenu.css";
import LogoIcon from "../../images/logo-icon.svg";
import Star from "../../images/star.svg";
import Arrow from "../../images/arrow.svg";

const VerticalMenu = () => {
  return (
    <div className="vertical-menu-body">
      <div className="div-title-vertical-menu">
        <img className="img-logo" src={LogoIcon} alt="" />
        <p className="title-vertical-menu">To-Do List</p>
      </div>
      <div className="line-space"></div>
      <div className="div-title-vertical-menu">
        <img className="img-star" src={Star} alt="" />
        <p className="title-vertical-menu">Today Tasks</p>
        <img className="img-arrow" src={Arrow} alt="" />
      </div>
      <div className="line-space"></div>
    </div>
  );
};

export default VerticalMenu;
