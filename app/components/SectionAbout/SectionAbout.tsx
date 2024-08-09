import styles from './SectionAbout.module.css';

const SectionAbout: React.FC = () => (
  <section className={styles.sectionAbout}>
    <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
      <h2 className={styles.headingSecondary}>
        Exciting tours for adventurous people
      </h2>
    </div>
    <div className={styles.row}>
      <div className={styles.col1of2}>
        <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>You're going to fall in love with nature</h3>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
        </p>
        <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Live adventures like you never have before</h3>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
        </p>
        <a href="#" className={styles.btnText}>Learn more &rarr;</a>
      </div>
      <div className={styles.col1of2}>
        <div className={styles.composition}>
          <img srcSet="/images/nat-1.jpg 300w, /img/nat-1-large.jpg 1000w"
               sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
               alt="Photo 1"
               className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`}
               src="/images/nat-1-large.jpg" />
          <img srcSet="/images/nat-2.jpg 300w, /img/nat-2-large.jpg 1000w"
               sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
               alt="Photo 2"
               className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`}
               src="/images/nat-2-large.jpg" />
          <img srcSet="/images/nat-3.jpg 300w, /img/nat-3-large.jpg 1000w"
               sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
               alt="Photo 3"
               className={`${styles.compositionPhoto} ${styles.compositionPhotoP3}`}
               src="/images/nat-3-large.jpg" />
        </div>
      </div>
    </div>
  </section>
);

export default SectionAbout;
