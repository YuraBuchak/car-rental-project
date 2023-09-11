import scss from './AboutUs.module.scss';
const AboutUs = () => {
  return (
    <section className={scss.section}>
      <div className={scss.container}>
        <h2 className={scss.aboutTitle}>Cheap Car Hire in Ukraine</h2>
        <p className={scss.aboutDescription}>
          Obtain a cheap car hire in Ukraine by making your booking online on
          our website and enjoy a country with an amazing history which unique
          in the world.
        </p>
        <p className={scss.aboutDescription}>
          In Ukraine you can find a variety of unique landscapes. Beaches,
          mountains, charming villages or cosmopolitan cities….all within your
          reach with a car hire because Ukraine has a network of completely
          renewed roads.
        </p>
        <p className={scss.aboutDescription}>
          Take advantage of our offers, hire a cheap car hire in Ukraine and
          make the most of this wonderful country with an amazing climate and
          with some of the most popular tourist destinations in Europe.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
