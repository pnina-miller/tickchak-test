import { TicketActionTypes } from "./types";

import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;


export const fetchRequest: AppThunk = (offset: number) => {
  return (dispatch) => {
    dispatch({ type: TicketActionTypes.FETCH_REQUEST });
    const formData = new FormData();
    formData.append('limit','10');
    formData.append('offset',offset+'');
    fetch('https://tickchak.co.il/ajax/api/exercise_get_tickets', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then((data) => {
        dispatch({ type: TicketActionTypes.FETCH_SUCCESS, payload: data.tickets });
      })
      .catch((err) => {
        dispatch({ type: TicketActionTypes.FETCH_ERROR, err })
      });
  }
}
