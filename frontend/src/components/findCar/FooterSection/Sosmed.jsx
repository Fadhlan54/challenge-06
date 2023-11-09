import iconFacebook from "/img/icon_facebook.svg";
import iconIntagram from "/img/icon_instagram.svg";
import iconTwitter from "/img/icon_twitter.svg";
import iconMail from "/img/icon_mail.svg";
import iconTwitch from "/img/icon_twitch.svg";

const Sosmed = () => {
  return (
    <div className="col-lg-3">
      <p>Connect with us</p>
      <div className="sosmed-icon">
        <img src={iconFacebook} alt="" />
        <img src={iconIntagram} alt="" />
        <img src={iconTwitter} alt="" />
        <img src={iconMail} alt="" />
        <img src={iconTwitch} alt="" />
      </div>
    </div>
  );
};

export default Sosmed;
