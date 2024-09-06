import Hero from "../Components/Hero";
import Statements from "../Components/Statements";
import Faculties from "../Components/Faculties";
import ViceChancellor from "../Components/ViceChancellor";
import Testimonials from "../Components/Testimonials";
import About from "../Components/About";
import Tour from "../Components/Tour";
import Footer from "../Components/Footer";
import faculties from "../faculties";
import news from "../news.json";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Statements />
      <Faculties
        theme="light"
        label="Our Faculties"
        heading="Programs Offered At Olabisi Onabanjo University"
        showAll={false}
        db={faculties}
      />
      <ViceChancellor />
      <Testimonials theme="light" />
      <About />
      <Faculties
        theme="dark"
        label="News and events"
        heading="Latest news about Olabisi Onabanjo University"
        showAll={false}
        db={news}
      />

      <Tour />
      <Faculties
        theme="light"
        label="Our Communities"
        heading="Communities at Olabisi Onabanjo University"
        showAll={false}
        db={faculties}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
