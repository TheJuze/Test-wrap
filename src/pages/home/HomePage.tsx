import styles from "./HomePage.module.scss";
import { WrapForm } from "../../widgets/wrapForm/ui/WrapForm.tsx";

export const HomePage = () => {
  return (
    <main className={styles.root}>
      <WrapForm />
    </main>
  );
};
