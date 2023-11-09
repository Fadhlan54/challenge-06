import gambarMobil from "/img/gambar-mobil.png";

export const MainImg = () => {
  return (
    <div className="col-md main-img pe-0 position-relative">
      <div className="main-bg"></div>
      <img src={gambarMobil} className="img-fluid bg-img" alt="" />
    </div>
  );
};
