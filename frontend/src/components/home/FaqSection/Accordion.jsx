import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const accordionData = [
    {
      target: "1",
      question: "Apa saja yang dibutuhkan?",
      answer: `<strong>This is the first item&apos;s accordion body.</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            repellat et molestiae vitae illum est deserunt obcaecati vero
            rerum, numquam veritatis, adipisci cupiditate veniam aliquam enim
            aperiam! Nesciunt, rerum enim.`,
    },
    {
      target: "2",
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer: `<strong>This is the second item&apos;s accordion body.</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            repellat et molestiae vitae illum est deserunt obcaecati vero
            rerum, numquam veritatis, adipisci cupiditate veniam aliquam enim
            aperiam! Nesciunt, rerum enim.`,
    },
    {
      target: "3",
      question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      answer: `<strong>This is the third item&apos;s accordion body.</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            repellat et molestiae vitae illum est deserunt obcaecati vero
            rerum, numquam veritatis, adipisci cupiditate veniam aliquam enim
            aperiam! Nesciunt, rerum enim.`,
    },
    {
      target: "4",
      question: "Apakah Ada biaya antar-jemput?",
      answer: `<strong>This is the fourth item&apos;s accordion body.</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            repellat et molestiae vitae illum est deserunt obcaecati vero
            rerum, numquam veritatis, adipisci cupiditate veniam aliquam enim
            aperiam! Nesciunt, rerum enim.`,
    },
    {
      target: "5",
      question: "Bagaimana jika terjadi kecelakaan?",
      answer: `<strong>This is the fifth item&apos;s accordion body.</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            repellat et molestiae vitae illum est deserunt obcaecati vero
            rerum, numquam veritatis, adipisci cupiditate veniam aliquam enim
            aperiam! Nesciunt, rerum enim.`,
    },
  ];

  return (
    <div className="col-lg-7 offset-lg-1">
      <div className="accordion m-0 p-0" id="accordionExample">
        {accordionData.map((data, index) => (
          <AccordionItem key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
