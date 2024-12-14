import { useState } from 'react';
import { Level } from '../../helpers/imc';
import styles from './Body.module.css';

import LeftSide from './LeftSide/Left';
import RightSide from './RightSide/Right';

const Body = () => {
    const  [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const [toShow, setToShow] = useState<Level | null>(null); 
    
    return (
        <div className={styles.container}>
            <LeftSide
                heightField={heightField}
                setHeightField={setHeightField}
                weightField={weightField}
                setWeightField={setWeightField}
                toShow={toShow}
                setToShow={setToShow} 
            />
            <RightSide
                setHeightField={setHeightField}
                setWeightField={setWeightField}
                toShow={toShow} 
                setToShow={setToShow} 
            />
        </div>
    );
};

export default Body;