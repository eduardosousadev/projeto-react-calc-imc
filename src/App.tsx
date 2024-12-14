import styles from './App.module.css';
import Header from './components/Header/Header';
import  Body from './components/Body/Body';

const App = () => {
  return (
    <div className={styles.main}>
        <Header />
        <Body />
    </div>
  );
};

export default App;