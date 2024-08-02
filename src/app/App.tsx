import { HomePage } from "../pages/home/HomePage.tsx";
import styles from "./App.module.scss";
import { Header } from "../widgets/header/ui/Header.tsx";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className={styles.root}>
      <Toaster richColors />
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
