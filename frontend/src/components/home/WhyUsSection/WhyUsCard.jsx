const WhyUsCard = ({ icon, title, text }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-11">
        <div className="card p-2">
          <div className="card-body">
            <img className="mb-3" src={icon} alt="" />
            <h5 className="card-title mb-3">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsCard;
