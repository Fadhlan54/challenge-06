const AccordionItem = ({ target, question, answer }) => {
  return (
    <div className="accordion-item mb-4 border border-1">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${target}`}
          aria-expanded="false"
          aria-controls={`collapse${target}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${target}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div
          className="accordion-body"
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
    </div>
  );
};

export default AccordionItem;
