import "./HorizontalMenu.css";
import AccountPhoto from "./../../images/accountPhoto.png";

const HorizontalMenu = () => {
  return (
    <div className="horizontal-menu-body">
      <div className="account-div">
        <div>
          <h4>Pedro Bertelli</h4>
          <h5>Web Developer Junior</h5>
        </div>
        <img className="img-account" src={AccountPhoto} alt="" />
      </div>
    </div>
  );
};

export default HorizontalMenu;
