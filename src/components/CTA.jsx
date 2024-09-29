import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Experimente nosso serviço de suporte com o atendimento rápido e
        eficiente com a Sara!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Clique em iniciar para começar a sua jornada de ter o seu próprio
        Software em suas mãos.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="http://127.0.0.1:5500/index.html">
        <Button />
      </a>
    </div>
  </section>
);

export default CTA;
