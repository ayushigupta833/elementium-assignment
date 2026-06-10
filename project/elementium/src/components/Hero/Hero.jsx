import styles from "./Hero.module.css";

import people1 from "../../assets/images/people1.jpg";
import people2 from "../../assets/images/people2.jpg";
import people3 from "../../assets/images/people3.jpg";
import people4 from "../../assets/images/people4.jpg";
import people5 from "../../assets/images/people5.jpg";
import people6 from "../../assets/images/people6.jpg";
import people7 from "../../assets/images/people7.jpg";
import people8 from "../../assets/images/people8.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>

      {/* LEFT DECORATIVE SHAPE */}
      <div className={styles.leftShape}></div>

      {/* PURPLE BLOB */}
      <div className={styles.blob}></div>

      <div className={styles.container}>

        <div className={styles.content}>

          {/* HEADING */}
          <h1 className={styles.title}>
            The <span className={styles.yellow}>thinkers</span> and
            <br />
            doers were <span className={styles.pink}>changing</span>
            <br />
            the <span className={styles.green}>status</span> Quo with
          </h1>

          {/* SUBTITLE */}
          <p className={styles.subtitle}>
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          {/* PEOPLE IMAGES */}
          <div className={styles.people}>

            <img src={people1} className={styles.p1} alt="" />
            <img src={people2} className={styles.p2} alt="" />
            <img src={people3} className={styles.p3} alt="" />
            <img src={people4} className={styles.p4} alt="" />
            <img src={people5} className={styles.p5} alt="" />
            <img src={people6} className={styles.p6} alt="" />
            <img src={people7} className={styles.p7} alt="" />
            <img src={people8} className={styles.p8} alt="" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;