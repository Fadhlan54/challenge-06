const TestimonialItem = ({
  imgPhotoUrl,
  rateUrl,
  review,
  name,
  address,
  age,
}) => {
  return (
    <div className="carousel-item active">
      <div className="testi-content py-5 rounded-4">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-2">
            <div className="profile">
              <div className="img-area">
                <img src={imgPhotoUrl} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <img className="rate mb-2" src={rateUrl} alt="" />
              <p>{review}</p>

              <p className="bio fw-semibold">
                {name} {age}, {address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
