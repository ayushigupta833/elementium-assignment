import styles from "./Testimonials.module.css";

import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import user4 from "../../assets/images/user4.jpg";
import user5 from "../../assets/images/user5.jpg";
import user6 from "../../assets/images/user6.jpg";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">

        {/* TITLE */}
        <div className={styles.heading}>
          <h2>
            <span>What</span> our customer
            <br />
            says About Us
          </h2>
        </div>

        {/* MAIN WRAPPER */}
        <div className={styles.wrapper}>

          {/* LEFT SIDE AVATARS */}
          <img src={user1} alt="" className={`${styles.avatar} ${styles.a1}`} />
          <img src={user2} alt="" className={`${styles.avatar} ${styles.a2}`} />
          <img src={user3} alt="" className={`${styles.avatar} ${styles.a3}`} />

          {/* RIGHT SIDE AVATARS */}
          <img src={user4} alt="" className={`${styles.avatar} ${styles.a4}`} />
          <img src={user5} alt="" className={`${styles.avatar} ${styles.a5}`} />
          <img src={user6} alt="" className={`${styles.avatar} ${styles.a6}`} />

          {/* TESTIMONIAL CARD */}
          <div className={styles.card}>

            <span className={styles.quoteTop}>“</span>

            <p>
              Elementium delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in traffic
              within days since its launch. They also had an impressive ability
              to use technologies that the company hadn’t used, which have also
              proved to be easy to use and reliable
            </p>

            <span className={styles.quoteBottom}>”</span>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;