import iconProfessional from "/img/icon_professional.svg";
import iconPrice from "/img/icon_price.svg";
import icon24hrs from "/img/icon_24hrs.svg";
import iconComplete from "/img/icon_complete.svg";
import WhyUsCard from "./WhyUsCard";

const WhyUsContent = () => {
  return (
    <div className="container-lg px-0">
      <div className="row gy-3 d-flex justify-content-center">
        <WhyUsCard
          icon={iconProfessional}
          title={"Mobil Lengkap"}
          text={
            "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
          }
        />
        <WhyUsCard
          icon={iconPrice}
          title={"Harga Murah"}
          text={
            "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
          }
        />
        <WhyUsCard
          icon={icon24hrs}
          title={"Layanan 24 Jam"}
          text={
            "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
          }
        />
        <WhyUsCard
          icon={iconComplete}
          title={"Sopir Profesional"}
          text={
            "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
          }
        />
      </div>
    </div>
  );
};

export default WhyUsContent;
