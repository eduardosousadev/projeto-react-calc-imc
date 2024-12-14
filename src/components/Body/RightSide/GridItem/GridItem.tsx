import { Level } from "../../../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../../../assets/up.png';
import downImage from '../../../../assets/down.png';

type Props = {
    item: Level;
};

const GridItem = ({ item }: Props) => {

    const showIcon = () => {
        return <img src={ item.icon === 'up' ? upImage : downImage} alt="" width={30} />
    };

    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>{showIcon()}</div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc && <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>}

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
};

export default GridItem;