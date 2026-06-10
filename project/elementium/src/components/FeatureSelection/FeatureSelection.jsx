import styles from "./FeatureSelection.module.css";

const FeatureSelection = ({
  title,
  description,
  image,
  reverse,
}) => {
  return (
    <section className={styles.feature}>

      <div
        className={`${styles.wrapper} ${
          reverse ? styles.reverse : ""
        }`}
      >

        {/* TEXT */}
        <div className={styles.content}>

          <h2>{title}</h2>

          <p>{description}</p>

          <button>Read more</button>

        </div>

        {/* IMAGE */}
        <div className={styles.imageWrapper}>

          <img src={image} alt={title} />

          {/* DECORATIVE TRIANGLE */}
          <div className={styles.triangle}></div>

        </div>

      </div>

    </section>
  );
};

export default FeatureSelection;