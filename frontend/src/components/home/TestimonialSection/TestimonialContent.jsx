import leftButton from "/img/Left button.svg";
import rightButton from "/img/Right button.svg";
import TestimonialItem from "./TestimonialItem";

const TestimonialContent = () => {
  const data = [
    {
      imgPhotoUrl: "/img/img_photo.svg",
      rateUrl: "/img/Rate.svg",
      name: "Jojo",
      age: 20,
      address: "Bekasi",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam tenetur, cumque eius laboriosam consectetur vero quos, incidunt rem minus autem ea minima facilis. Ea cumque provident pariatur exercitationem praesentium odit",
    },
    {
      imgPhotoUrl: "/img/img_photo.svg",
      rateUrl: "/img/Rate.svg",
      name: "Ilyas",
      age: 21,
      address: "Bogor",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto quae quam beatae nobis molestias aut eligendi laborum cupiditate. Deleniti itaque sed cumque dolore maxime neque eum aspernatur quam autem?",
    },
    {
      imgPhotoUrl: "/img/img_photo.svg",
      rateUrl: "/img/Rate.svg",
      name: "Adit",
      age: 20,
      address: "Bekasi",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolore. Ducimus perferendis excepturi, quis dignissimos nobis neque nulla omnis, cupiditate aliquid voluptatum aperiam atque expedita saepe. Iste laudantium placeat nostrum.",
    },
  ];

  return (
    <div className="testi d-flex align-items-center">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {data.map((item, index) => (
            <TestimonialItem
              key={index}
              imgPhotoUrl={item.imgPhotoUrl}
              rateUrl={item.rateUrl}
              review={item.review}
              name={item.name}
              age={item.age}
              address={item.address}
            />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">
            <img src={leftButton} alt="" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span aria-hidden="true">
            <img src={rightButton} alt="" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialContent;
