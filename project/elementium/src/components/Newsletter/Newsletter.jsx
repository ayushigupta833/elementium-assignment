import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className="container">

        {/* TOP CONTENT */}
        <div className={styles.top}>

          <h2>
            Subscribe to <br />
            our newsletter
          </h2>

          <p>
            To make your stay special and even more memorable
          </p>

          <button>Subscribe Now</button>

        </div>

        {/* FOOTER AREA */}
        <div className={styles.footerGrid}>

          <div>
            <h4>Company</h4>
            <p>Home</p>
            <p>Studio</p>
            <p>Services</p>
            <p>Blog</p>
          </div>

          <div>
            <h4>Terms & Policies</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Licenses</p>
            <p>Accessibility</p>
          </div>

          <div>
            <h4>Follow Us</h4>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            <p>Twitter</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>1458 Fashion Ave, STE</p>
            <p>2020 CA, USA</p>
            <p>(629) 555-0129</p>
            <p>info@elementium.com</p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className={styles.bottom}>
          ©2026 Elementium. All rights reserved
        </div>

      </div>
    </section>
  );
};

export default Newsletter;