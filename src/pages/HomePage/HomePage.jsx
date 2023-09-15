import Preference from 'components/Preference/Preference';
import AboutUs from 'components/AboutUs/AboutUs';
import Hero from 'components/Hero/Hero';
import Footer from 'components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Preference />
      <AboutUs />
      <Footer />;
    </>
  );
};

export default HomePage;
