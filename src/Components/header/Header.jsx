import "./header.css";
import DownloadButtons from "./Download_Buttons";
import SocialMediaLinks from "./SocialMediaLinks";
import myImg from "../../assets/freian.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h2>James Freian Hapitan</h2>
        <h5 className="text-light">Aspiring Software Developer</h5>
        <DownloadButtons />
        <SocialMediaLinks />
        <div className="myImg">
          <img src={myImg} alt="jamesss" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
