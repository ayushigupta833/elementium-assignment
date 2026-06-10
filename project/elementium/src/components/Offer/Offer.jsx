import styles from "./Offer.module.css";

const offers = [
  {
    small: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    small: "This hunger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    small: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className="container">

        {/* HEADING */}
        <div className={styles.heading}>
          <h2>
            What we <span>can</span> offer you!
          </h2>
        </div>

        {/* OFFER ROWS */}
        <div className={styles.offerList}>
          {offers.map((item, index) => (
            <div className={styles.offerRow} key={index}>

              <div className={styles.left}>
                <p>{item.small}</p>
              </div>

              <div className={styles.center}>
                <h3>{item.title}</h3>
              </div>

              <div className={styles.right}>
                <span>→</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offer;