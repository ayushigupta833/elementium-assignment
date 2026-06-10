import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">

        {/* TOP */}
        <div className={styles.top}>

          {/* BRAND */}
          <div className={styles.brand}>
            <h2>Elementium</h2>

            <p>
              We create meaningful digital experiences
              that help ambitious brands grow.
            </p>
          </div>

          {/* LINKS */}
          <div className={styles.linksWrapper}>

            {/* COMPANY */}
            <div className={styles.column}>
              <h4>Company</h4>

              <a href="#">Home</a>
              <a href="#">Studio</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>

            {/* SOCIAL */}
            <div className={styles.column}>
              <h4>Follow Us</h4>

              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Behance</a>
            </div>

            {/* CONTACT */}
            <div className={styles.column}>
              <h4>Contact</h4>

              <p>hello@elementium.com</p>
              <p>+91 98765 43210</p>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p>© 2026 Elementium. All rights reserved.</p>

          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;