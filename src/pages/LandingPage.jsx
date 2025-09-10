import { Link } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LandingPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myVideo from "../videor.mp4";

// Icons
import {
  FaHome,
  FaRecycle,
  FaPaintBrush,
  FaLeaf,
  FaUsers,
  FaHandHoldingHeart,
  FaLaptopCode,
  FaTags,
  FaShippingFast,
} from "react-icons/fa";

const LandingPage = () => {
  // Features section
  const features = [
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      text: "Every product promotes a circular economy.",
    },
    {
      icon: <FaUsers />,
      title: "Empowering Artisans",
      text: "Providing sustainable livelihoods to creators.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Authentically Handcrafted",
      text: "Unique products made with care and skill.",
    },
    {
      icon: <FaLaptopCode />,
      title: "AI-Powered Transparency",
      text: "Fair and instant pricing for your scrap.",
    },
    {
      icon: <FaTags />,
      title: "Ethical & Fair Trade",
      text: "Committed to fair wages and a positive impact.",
    },
    {
      icon: <FaShippingFast />,
      title: "Hassle-Free Pickups",
      text: "Schedule and sell scrap from your doorstep.",
    },
  ];

  // Artisan stories
  const stories = [
    {
      name: "Sunita Devi",
      story: "Sunita now earns extra income by creating eco-friendly tote bags from scrap fabric.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHPZrRoVoEkrOgmZNeP2KPELSo3p7WtwuLg&s" // Example image for Sunita
    },
    {
      name: "Ramesh Singh",
      story: "Ramesh transforms discarded wood into unique home decor pieces loved by urban buyers.",
      imageUrl: "https://thumbs.dreamstime.com/b/new-delhi-india-january-indian-poor-man-came-to-see-preparations-day-parade-portrait-103167033.jpg" // Example image for Ramesh
    },
    {
      name: "Anita Creations",
      story: "Anita and her group of artisans upcycle tyres into stylish stools, reducing landfill waste.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7EGbhJJNum7YGY1Ku1IjHA48AxyM8pnU5A&s" // Example image for Anita
    },
    {
      name: "Priya Sharma",
      story: "Priya found a new passion in crafting beautiful jewelry from discarded metal and wires.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSlk15jfeVy_RYxB5HwU1PelkrFB9AEB-kQ&s" // Example image for Priya
    },
    {
      name: "Kamla Bai",
      story: "Kamla Bai collects plastic bottles and transforms them into beautiful vertical gardens, bringing a touch of green to urban balconies.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb4o1pw0GA4LWzfTwTJ3coht6tN7GzAVtRg&s" // New story for Kamla
    },
    {
      name: "Kishor Lal",
      story: "Kishor Lal uses a special technique to roll old newspapers into sturdy frames and bowls, giving waste paper a colorful and durable new life.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwAxCeVeMIrhq2pfRLdt1efOiKsVOsd_-ng&s" // New story for Kishor
    },
    {
      name: "Resham Weavers",
      story: "The Resham Weavers group gives old silk sarees a new lease of life by weaving them into vibrant, one-of-a-kind rugs and bags.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s-ldZ-VHL9VYkOA-ZXkiIOyKdeWdT5oKkA&s" // New story for Resham Weavers
    }
  ];


   const whyChooseSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // ek card ek time par
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  // Hero slider content
// Hero slider content (replacing heroSlides array)
const heroSlides = [
  {
    headline: "AI That Turns Scrap Into Value",
    subheadline:
      "Snap a photo, get an instant estimate, and schedule pickup – smarter recycling starts here.",
    ctaText: "Sell Scrap Now",
    ctaLink: "/login/user",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPs37m8F5adazXkLKwYi8PFNEu9PtQkH5rrA&s", // example placeholder
  },
  {
    headline: "Smart Matching for Scrapbuddy & Artisans",
    subheadline:
      "Our platform connects collectors with verified households and makers for fair, transparent trade.",
    ctaText: "Join as Collector",
    ctaLink: "/login/kabadiwala",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ymLIRQPUl55h9eD_MZoZHhmKbU26-rH-0A&s", // example placeholder
  },
  {
    headline: "Upcycling Powered by Data & Impact",
    subheadline:
      "Every item tracked, priced, and repurposed with AI insights – from waste to marketplace.",
    ctaText: "Explore Marketplace",
    ctaLink: "/marketplace",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdd0dpI-BQuQYBUxUqkswF9hq_OMOp-6yKQ&s", // example placeholder
  },
];


  // Categories section
  const categories = [
    {
      name: "Totes & Shopping",
      img: "https://img.indiahandmade.com/catalog/product/cache/dee0bc41489afb86ae85561eae1bc64e/w/h/white_bag_ladies_3__1.png",
    },
    {
      name: "Home Decor",
      img: "https://cdn.moolwan.com/374445b4-2197-43c6-a0b3-6bc588b62774.jpg",
    },
    {
      name: "Pouches & Purses",
      img: "https://www.recharkha.org/cdn/shop/files/DSC03361_copy.jpg?v=1735972288&width=535://via.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzo7aIkLuc0Oqu7mSEWPSfANoPl7nBg3RQ4A&s.com/200x200.png?text=Purses",
    },
    {
      name: "Office & School",
      img: "https://scrapshala.com/cdn/shop/files/GEET_large_68302558-c2e7-4c63-9186-c71bbc57547a.webp?v=1745327971&width=300",
    },
    {
      name: " Lifestyle Essentials",
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Gift Vouchers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RjKhnZl1y0Wkk9cAGAPvZ87KozAYxl8BUw&s",
    },
  ];

  // Hero slider settings
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Stories slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };


  

  return (
    <div className="landing-pagehome">
      <Navbar />

     


      {/* Hero slider */}
      <header className="hero-sliderhome">
        <Slider {...heroSliderSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index}>
              <div
                className="hero-slidehome"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('${slide.imageUrl}')`,
                }}
              >
                <div className="hero-contenthome">
                  <h1>{slide.headline}</h1>
                  <p>{slide.subheadline}</p>
                  <Link to={slide.ctaLink} className="btn btn-herohome">
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </header>

{/* --- ✨ NEW: Quick Pickup Section ✨ --- */}
      <section className="quick-pickup-sectionhome">
        <div className="pickup-image-columnhome">
        <h1>"<span style={{ color: "red" }}>Scrapido</span> – Where Waste Turns into Worth & Welfare."

</h1><h3>"From AI-powered scrap estimates to kabadiwala-approved fair deals – every transaction fuels social impact and a greener tomorrow."</h3>

          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerPvpvjS6-RUBYVuxShWbY3n1vac8GT8sFg&s" 
            alt="Scrap pickup service" 
          />
        </div>
        <div className="pickup-form-columnhome">
          <h2>Schedule a Hassle-Free Pickup</h2>
          <p>Enter your details and our team will get in touch with you shortly.</p>
          <form className="pickup-formhome">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Pincode" required />
            <button type="submit" className="btn btn-primary">Request a Call Back</button>
          </form>
          <div className="feature-highlightshome">
            <div className="feature-boxhome">
              {/* You can add an icon here if you like */}
              <h4>Schedule a Pickup</h4>
              <p>Choose a time that works for you.</p>
            </div>
            <div className="feature-boxhome">
              {/* You can add an icon here if you like */}
              <h4>Doorstep Service</h4>
              <p>We'll pick up the scrap right from your address.</p>
            </div>
          </div>
        </div>
      </section>





      <div className="containerhome">
        {/* Roles Section */}
        <section className="roles-section-v2">
          <div className="roles-header">
            <h2>Join Our Sustainable Revolution</h2>
            <p>
              Whether you're clearing out clutter, collecting materials, or
              creating art, you have a vital role to play.
            </p>
          </div>
          <div className="roles-container-v2">
            {/* Household */}
            <Link
              to="/login/user"
              className="role-card-v2"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFun-D67hIbE486qb_NInIjoi1WBAoTKYZg&s')`,
              }}
            >
              <div className="card-content">
                <FaHome size={40} className="card-icon" />
                <h3>I'm a Household</h3>
                <p>Turn your scrap into value from the comfort of your home.</p>
                <span className="card-cta">Sell Scrap →</span>
              </div>
            </Link>

            {/* Scrap Buddy */}
            <Link
              to="/login/kabadiwala"
              className="role-card-v2"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzM2xNaW3ML5nS8crV19i-BFW9hYO-wzh_yQ&s')`,
              }}
            >
              <div className="card-content">
                <FaRecycle size={40} className="card-icon" />
                <h3>I'm a Scrap Buddy</h3>
                <p>Build your business by connecting with homes and artisans.</p>
                <span className="card-cta">Find Pickups →</span>
              </div>
            </Link>

            {/* Artisan */}
            <Link
              to="/login/artisan"
              className="role-card-v2"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuAg2cGjTZkOKSAJJp3H2ZiUZFHTiwsEAgA&s')`,
              }}
            >
              <div className="card-content">
                <FaPaintBrush size={40} className="card-icon" />
                <h3>I'm an Artisan</h3>
                <p>Source unique materials and showcase your creations.</p>
                <span className="card-cta">Start Creating →</span>
              </div>
            </Link>
          </div>
        </section>

         {/* Categories */}
     <section className="categories-sectionhome">
      <h2>Eco Bazaar</h2>
  <div className="categories-gridhome">
    {categories.map((category, index) => (
      <Link to="/marketplace" key={index} className="category-cardhome">
        <div className="circle-image">
          <img src={category.img} alt={category.name} />
        </div>
        <h4>{category.name}</h4>
      </Link>
    ))}
  </div>
</section>

      <section className="video-section">
      <div className="video-container">
        <video
          className="custom-video"
          autoPlay
          loop
          muted
          controls
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

        {/* Stories Section */}
       <section className="stories-sectionhome">
  <h2>Artisan Stories</h2>
  <Slider
    {...sliderSettings}
    slidesToShow={3}   // ek time pe 3 stories
    slidesToScroll={1} // ek slide move hoga
    responsive={[
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]}
  >
    {stories.map((s, idx) => (
      <div key={idx} className="story-slide-v2">
        <div className="story-image-wrapper">
          <img src={s.imageUrl} alt={s.name} className="story-image-v2" />
        </div>
        <div className="story-content-v2">
          <p className="story-text-v2">"{s.story}"</p>
          <h4 className="story-name-v2">- {s.name}</h4>
        </div>
      </div>
    ))}
  </Slider>
</section>


        {/* Impact Section */}
        <section className="impact-v2-sectionhome">
          <div className="impact-v2-contenthome">
            <h2 className="impact-v2-titlehome">
              More Than Just Scrap. It's a Revolution.
            </h2>
            <p className="impact-v2-descriptionhome">
              Every piece of scrap you sell contributes to a larger movement.
              We're reducing landfill waste, saving CO₂ emissions, and most
              importantly, creating sustainable livelihoods for rural artisans
              across India.
            </p>
            <div className="impact-v2-statshome">
              <div className="impact-v2-stat-itemhome">
                <h3>1,200+ kg</h3>
                <p>Scrap Diverted from Landfills</p>
              </div>
              <div className="impact-v2-stat-itemhome">
                <h3>50+</h3>
                <p>Livelihoods Generated</p>
              </div>
              <div className="impact-v2-stat-itemhome">
                <h3>350+</h3>
                <p>Unique Products Created</p>
              </div>
            </div>
            <Link to="#" className="btn btn-primaryhome">
              Learn More About Our Mission
            </Link>
          </div>
          <div className="impact-v2-imagehome">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrecely3Fu0yz_ga484Z4jg6WwDR-DzdcUA&s"
              alt="Artisan empowered by Scrap2Value"
            />
          </div>
        </section>
      </div>

      {/* Why Choose Us Slider */}
      <section className="why-choose-sectionhome">
        <h2>Why Choose Us?</h2>
        <div className="why-sliderhome">
          <Slider {...whyChooseSettings}>
            {features.map((feature, index) => (
              <div key={index} className="why-card">
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p> {/* ✅ use text not description */}
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;