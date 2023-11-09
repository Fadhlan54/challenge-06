const GettingStartedSection = () => {
  return (
    <>
      <section className="getting-started mb-5" id="getting-started-section">
        <div className="container gs-con text-center text-white py-5 justify-content-center rounded-4 ">
          <div className="row my-2">
            <div className="col-lg gs-head">
              Sewa Mobil di (Lokasimu) Sekarang
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-8 col-lg-6 gs-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col gs-desc">
              <a
                className="btn btn-custom fw-bold text-white border-0"
                href="cars"
              >
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GettingStartedSection;
