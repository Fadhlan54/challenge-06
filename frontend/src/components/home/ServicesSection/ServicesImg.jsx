import imgService from "/img/img_service.svg";

const ServicesImg = () => {
  return (
    <div className="col-lg d-flex justify-content-center align-items-center text-center">
      <div className="img-services-container mb-4">
        <img className="img-services" src={imgService} alt="" width="70%" />
      </div>
    </div>
  );
};

export default ServicesImg;
