import styles from "./Header.module.css";
import SummaryModal from "../SummaryModal";
export default function Header() {
  return (
    <div className={styles.header}>
      <p>ShopCart</p>

      <SummaryModal />
    </div>
  );
}
