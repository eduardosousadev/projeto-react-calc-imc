import styles from './Header.module.css';
import poweredImage from '../../assets/powered.png';

const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <img src={poweredImage} alt="" width={150} />
            </div>
        </header>
    )
};

export default Header;