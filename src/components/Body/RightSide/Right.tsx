import { Level, levels } from '../../../helpers/imc';
import styles from './Right.module.css';
import GridItem from './GridItem/GridItem';
import leftArrowImage from '../../../assets/leftarrow.png';

type Props = {
    setHeightField: (state: number) => void;
    setWeightField: (state: number) => void;
    toShow: Level | null;
    setToShow: (level: Level | null) => void;
}

const Right = ({ setHeightField, setWeightField, toShow, setToShow }: Props) => {
    const handleBackButton = () => {
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    };
    
    return (
        <div className={styles.rightSide}>
            {
                !toShow &&
                <div className={styles.grid}>
                    {levels.map((item, key) => (
                        <GridItem key={key} item={item} />
                    ))}
                </div>
            }
            {
                toShow &&
                <div className={styles.rightBig}>
                    <div className={styles.rightArrow} onClick={handleBackButton}>
                        <img src={leftArrowImage} alt="" width={25} />
                    </div>
                    <GridItem item={toShow} />
                </div>
            }
        </div>
    );
};

export default Right;