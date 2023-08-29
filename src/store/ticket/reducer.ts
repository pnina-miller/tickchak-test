import { Reducer } from "redux";
import { TicketActionTypes, TicketsState } from "./types";

export const initialState: TicketsState = {
  data: [],
  errors: undefined,
  loading: false,
  showFormPopup: false
};

const reducer: Reducer<TicketsState> = (state = initialState, action) => {
  switch (action.type) {
    case TicketActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case TicketActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: state.data.concat(action.payload) };
    }
    case TicketActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case TicketActionTypes.ADD_TICKET: {
      return { ...state, loading: false, data: [...state.data, action.payload] };
    }
    case TicketActionTypes.SHOW_FORM_POPUP: {
      return { ...state, showFormPopup: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as TicketReducer };
