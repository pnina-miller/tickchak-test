import React, { useEffect, useState } from "react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import ProductItem from "../ProductItem";
import { ApplicationState } from "../../store";
import { fetchRequest } from "../../store/ticket/action";
import { Ticket, TicketActionTypes } from "../../store/ticket/types";
import { Loader } from "../loaders";
import TicketForm from "../TicketForm";
import plusIcon from '../../assets/icons/plus-circle.svg';
import searchIcon from '../../assets/icons/search.svg';
import './style.scss'

interface PropsFromState {
  loading: boolean;
  data: Ticket[];
}

interface propsFromDispatch {
  fetchRequest: (offset: number) => any;
  setShowForm: (show: boolean) => void;
}

type AllProps = PropsFromState & propsFromDispatch;


const HomePage: React.FC<AllProps> = ({
  loading,
  data,
  fetchRequest,
  setShowForm
}) => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchRequest(offset);
  }, [offset]);

  return (
    <div className="home-page">
      <div className="page-header">
        <div>
          <div className="title">כרטיסים לאירוע</div>
          <div className="text">מכאן הכל מתחיל</div>
        </div>
        <div className="buttons">
          <button className="icon-btn plus" onClick={() => setShowForm(true)}>
            <img src={plusIcon} />
          </button>
          <button className="icon-btn search"><img src={searchIcon} /></button>
        </div>
      </div>
      <div className="ticket-list-container">
        {data.map(item => {
          return <ProductItem item={item} />;
        })}
      </div>
      <div className="page-footer">
        {loading ? <Loader />
          : <button className="load-more" onClick={() => setOffset(oldOffset => oldOffset + 10)}>טען עוד</button>
        }
      </div>
      <TicketForm />
    </div>
  );
};

const mapStateToProps = ({ tickets }: ApplicationState) => ({
  loading: tickets.loading,
  data: tickets.data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: (offset: number) => {
      dispatch(fetchRequest(offset));
    },
    setShowForm: (show: boolean) => {
      dispatch({ type: TicketActionTypes.SHOW_FORM_POPUP, payload: show });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
