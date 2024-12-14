// import { useState } from "react";
import styles from './Left.module.css';
import { calculateIMC, Level } from '../../../helpers/imc';

type Props = {
    heightField: number;
    setHeightField: (state: number) => void;
    weightField: number;
    setWeightField: (state: number) => void;
    toShow: Level | null;
    setToShow: (state: Level | null) => void;
}

const Left = ({ heightField ,setHeightField, weightField, setWeightField, toShow, setToShow }: Props) => {
    const handleCalculateIMCButton = () => {
        if (heightField && weightField) {
            setToShow(calculateIMC(heightField, weightField));
        } else {
            alert('Preencha todos os campos');
        }
    }
    return (
        <div className={styles.leftSide}>
            <h1>Calcule o seu IMC.</h1>
            <p>
                IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>
            <input 
                type="number" 
                placeholder="Digite a sua altura. Ex: 1.75 (em metros)"
                value={heightField > 0 ? heightField : ''}
                onChange={e => setHeightField(parseFloat(e.target.value)) }
                disabled={toShow ? true : false}
            />
            <input 
                type="number" 
                placeholder="Digite a seu peso. Ex: 75.3 (em kilogramas)"
                value={weightField > 0 ? weightField : ''}
                onChange={e => setWeightField(parseFloat(e.target.value)) }
                disabled={toShow ? true : false}
            />

            <button 
                onClick={ handleCalculateIMCButton } 
                disabled={toShow ? true : false}
            >
                Calcular
            </button>
        </div>
    );
};

export default Left;
