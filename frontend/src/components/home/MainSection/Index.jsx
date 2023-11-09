import { MainText } from "./MainText";
import { MainImg } from "./MainImg";

import "./MainSection.css";

const MainSection = () => {
  return (
    <>
      <section className="main-section pt-4 mb-5" id="main-section">
        <div className="container-fluid d-flex flex-wrap">
          <div className="row gy-4">
            <MainText />

            <MainImg />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
