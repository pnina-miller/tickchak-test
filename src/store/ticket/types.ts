export interface Ticket {
    title: string,
    amount: number,
    amount_avaliable: number,
    price: number,
    color: string,
    active: 0|1,
    image: string
}

export interface TicketsState {
    readonly loading: boolean;
    readonly data: Ticket[];
    readonly errors?: string;
    readonly showFormPopup: boolean;
  }


  export enum TicketActionTypes {
    FETCH_REQUEST = "@@ticket/FETCH_REQUEST",
    FETCH_SUCCESS = "@@ticket/FETCH_SUCCESS",
    FETCH_ERROR = "@@ticket/FETCH_ERROR",
    ADD_TICKET = "@@ticket/ADD_TICKET",
    SHOW_FORM_POPUP = "@@ticket/SHOW_FORM_POPUP",
  }