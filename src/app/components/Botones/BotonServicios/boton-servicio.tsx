import type { NextPage } from "next";
import { memo } from "react";
import styles from "./boton-servicio.module.css";

export type BotonServicioType = {
  className?: string;
  showIcono?: boolean;
  text?: string;
  info?: string;
  onClick?: () => void;
};

const BotonServicio: NextPage<BotonServicioType> = memo(
  ({ className = "", showIcono = true, text = "Consultas", info, onClick }) => {
    return (
      <div className={[styles.botonServicio, className].join(" ")} onClick={onClick}>
      <div className={styles.infoWrapper}>
        {showIcono && <img className={styles.infoIcon} alt="" src={info} />}
      </div>
      <div className={styles.misDocumentos}>{text}</div>
    </div>
    );
  }
);

export default BotonServicio;
