import { combineReducers } from "redux";
import { TicketReducer } from "./ticket/reducer";
import { TicketsState } from "./ticket/types";


export interface ApplicationState {
  tickets: TicketsState;
}

export const createRootReducer = () =>
  combineReducers({
    tickets: TicketReducer,
  });
