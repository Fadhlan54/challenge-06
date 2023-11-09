import Address from "./Address";
import Navigation from "./Navigation";
import Sosmed from "./Sosmed";
import Copyright from "./Copyright";

const FooterSection = () => {
  return (
    <>
      <section className="footer" id="footer-section">
        <div className="container-fluid">
          <div className="row d-flex flex-wrap gy-3">
            <Address />
            <Navigation />
            <Sosmed />
            <Copyright />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
