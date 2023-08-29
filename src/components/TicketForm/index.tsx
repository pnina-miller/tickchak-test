import React, { useState } from "react";
import { connect } from "react-redux";
import './style.scss'
import { ApplicationState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Ticket, TicketActionTypes } from "../../store/ticket/types";
import {CustomInput} from "../CustomInputs";
import closeIcon from '../../assets/icons/close.png';

interface PropsFromState {
    showFormPopup: boolean;
}

interface propsFromDispatch {
    addTicket: (payload: Ticket) => void;
    setShowForm: (show: boolean) => void;
}

type AllProps = PropsFromState & propsFromDispatch;


const TicketForm: React.FC<AllProps> = ({
    addTicket,
    setShowForm,
    showFormPopup
}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [isFirstShow, setIsFirstShow] = useState(true)

    const createTicket = () => {
        const newTicket: Ticket = {
            title: name,
            amount: 0,
            amount_avaliable: amount,
            price: price,
            color: '27C4D1',
            active: 0,
            image: ''
        };
        resetForm();
        addTicket(newTicket);
    }

    const resetForm = () => {
        setName('');
        setAmount(0);
        setPrice(0);
    }

    const closeForm = () => {
        resetForm();
        setIsFirstShow(false);
        setShowForm(false);
    }
    return (
        <div className={"ticket-form-container " + (showFormPopup ? 'open' : isFirstShow ? '' : 'close')}>
            <div className="form-header">
                <button className="close-button" onClick={closeForm}>
                    <img src={closeIcon} />
                </button>
                <span className="title">כרטיס</span>
            </div>
            <div className="form-body">
                <CustomInput value={name} onChange={(e: any) => { ; setName(e.target.value) }} label="שם הכרטיס" name="שם בכרטיס" explanation="לדוגמא: כרטיס כניסה " />
                <CustomInput value={price} onChange={(e: any) => { ; setPrice(e.target.value) }} label="מחיר" name="תקציר" explanation="בכמה מילים על הכרטיס" />
                <CustomInput value={amount} onChange={(e: any) => { ; setAmount(e.target.value) }} label="כמות" name="תקציר" explanation="בכמה מילים על הכרטיס" />

            </div>
            <div className="form-footer">
                <button onClick={closeForm}>סגור</button>
                <button className="btn-colored" onClick={createTicket}>הוסף</button>
            </div>
        </div>
    );
};

const mapStateToProps = ({ tickets }: ApplicationState) => ({
    showFormPopup: tickets.showFormPopup
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        addTicket: (payload: Ticket) => {
            dispatch({ type: TicketActionTypes.ADD_TICKET, payload });
            dispatch({ type: TicketActionTypes.SHOW_FORM_POPUP, payload: false });
        },
        setShowForm: (show: boolean) => {
            dispatch({ type: TicketActionTypes.SHOW_FORM_POPUP, payload: show });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
