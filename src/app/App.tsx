import { HomePage } from "../pages/home/HomePage.tsx";
import styles from "./App.module.scss";
import { Header } from "../widgets/header/ui/Header.tsx";
import { Toaster, toast } from "sonner";

const App = () => {
  return (
    <div className={styles.root}>
      <Toaster richColors />
      <Header />

      <button onClick={() => toast("My first toast")}>Give me a toast</button>
      <HomePage />
    </div>
  );
};

export default App;
