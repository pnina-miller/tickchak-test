import React from "react";
import './style.scss'
import bicycleIcon from '../../assets/icons/bicycle.png';

interface PropsFromState {
    label: string;
    name: string;
    explanation: string;
    value?: any
}

interface propsFromDispatch {
    onChange: (event: any) => void;
}

type AllProps = PropsFromState & propsFromDispatch;


const CustomInput: React.FC<AllProps> = ({ onChange, label, name, explanation, value }) => {

    return (
        <div className="input-wrapper">
            <img className="bicycle-icon" src={bicycleIcon} />
            <div className="group">
                <input value={value || ''} id={"input" + label} className="field" placeholder={label} onChange={onChange} />
                <label htmlFor={"input" + label} className="label">{label}</label>
            </div>
            <div className="input-explanation">
                <span className="name">{name}</span>
                <span className="explanation">{explanation}</span>
            </div>
        </div>

    )

}

type props = { checked: boolean, check: () => void }

const CustomSwitch: React.FC<props> = ({ checked, check }) => {

    return (
        <label className="switch">
            <input className={(checked ? 'checked' : 'not-checked') + " checkbox"} onClick={check} />
            <span className="slider round"></span>
            <span className="text">{checked ? 'פעיל' : 'כבוי'}</span>
        </label>
    )
}


export { CustomInput, CustomSwitch }