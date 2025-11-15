
const Box = () => {
  const placeholderImages = {
    revamp1: 'placeholder-cushion-covers.jpg',
    revamp2: 'placeholder-figurines.jpg',
    revamp3: 'placeholder-storage.jpg',
    revamp4: 'placeholder-lighting.jpg',
    appliance1: 'placeholder-ac.jpg',
    appliance2: 'placeholder-fridge.jpg',
    appliance3: 'placeholder-microwave.jpg',
    appliance4: 'placeholder-washing-machine.jpg',
    headphone1: 'placeholder-boat.jpg',
    headphone2: 'placeholder-boult.jpg',
    headphone3: 'placeholder-noise.jpg',
    headphone4: 'placeholder-zebronics.jpg',
    auto1: 'placeholder-cleaning.jpg',
    auto2: 'placeholder-tyre.jpg',
    auto3: 'placeholder-helmet.jpg',
    auto4: 'placeholder-vacuum.jpg',
  };

  return (
    <div className="sale-promo-container">

      {/* 1. Revamp your home in style */}
      <div className="promo-block pink-gradient">
        <h2 className="promo-title">Revamp your home in style</h2>
        <div className="promo-grid two-by-two">
          <a href="#" className="promo-item">
            <img src={placeholderImages.revamp1} alt="Cushion covers" />
            <p>Cushion covers, bedsheets & more</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.revamp2} alt="Figurines, vases & more" />
            <p>Figurines, vases & more</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.revamp3} alt="Home storage" />
            <p>Home storage</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.revamp4} alt="Lighting solutions" />
            <p>Lighting solutions</p>
          </a>
        </div>
        <a href="#" className="promo-link">Explore all</a>
      </div>

      {/* 2. Appliances for your home */}
      <div className="promo-block">
        <h2 className="promo-title">Appliances for your home | Up to 55% off</h2>
        <div className="promo-grid two-by-two">
          <a href="#" className="promo-item">
            <img src={placeholderImages.appliance1} alt="Air conditioners" />
            <p>Air conditioners</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.appliance2} alt="Refrigerators" />
            <p>Refrigerators</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.appliance3} alt="Microwaves" />
            <p>Microwaves</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.appliance4} alt="Washing machines" />
            <p>Washing machines</p>
          </a>
        </div>
        <a href="#" className="promo-link">See more</a>
      </div>

      {/* 3. Headphones */}
      <div className="promo-block">
        <h2 className="promo-title">Starting ₹149 | Headphones</h2>
        <div className="promo-grid two-by-two brand-grid">
          <a href="#" className="promo-item brand-item">
            <img src={placeholderImages.headphone1} alt="boAt" />
            <p>Starting ₹249 | boAt</p>
          </a>
          <a href="#" className="promo-item brand-item">
            <img src={placeholderImages.headphone2} alt="boulT" />
            <p>Starting ₹349 | bouldt</p>
          </a>
          <a href="#" className="promo-item brand-item">
            <img src={placeholderImages.headphone3} alt="NOISE" />
            <p>Starting ₹649 | Noise</p>
          </a>
          <a href="#" className="promo-item brand-item">
            <img src={placeholderImages.headphone4} alt="ZEBRONICS" />
            <p>Starting ₹149 | Zebronics</p>
          </a>
        </div>
        <a href="#" className="promo-link">See all offers</a>
      </div>

      {/* 4. Automotive essentials */}
      <div className="promo-block pink-gradient">
        <h2 className="promo-title">Automotive essentials | Up to 60% off</h2>
        <div className="promo-grid two-by-two">
          <a href="#" className="promo-item">
            <img src={placeholderImages.auto1} alt="Cleaning accessories" />
            <p>Cleaning accessories</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.auto2} alt="Tyre & rim care" />
            <p>Tyre & rim care</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.auto3} alt="Helmets" />
            <p>Helmets</p>
          </a>
          <a href="#" className="promo-item">
            <img src={placeholderImages.auto4} alt="Vacuum Cleaner" />
            <p>Vacuum Cleaner</p>
          </a>
        </div>
        <a href="#" className="promo-link">See more</a>
      </div>

    </div>
  );
};

export default Box;