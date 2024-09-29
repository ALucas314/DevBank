import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre uma oferta de cartão melhor <br className="sm:block hidden" />{" "}
        em algumas etapas fáceis.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Descubra uma oferta de cartão superior em passos simples. Pesquise,
        compare e escolha. Melhore sua experiência financeira com facilidade e
        conveniência.
      </p>

      <a href="http://127.0.0.1:5500/index.html">
        <Button styles={`mt-10`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
