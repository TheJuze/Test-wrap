import { HomePage } from "../pages/home/HomePage.tsx";
import styles from "./App.module.scss";
import { Header } from "../widgets/header/ui/Header.tsx";

const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
