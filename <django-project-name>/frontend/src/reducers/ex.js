import { GET_ALL, DELETE_ONE, ADD_ONE } from "../actions/types.js";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_ONE:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };
    case ADD_ONE:
      return {
        ...state,
        leads: [...state.leads, action.payload]
      };
    default:
      return state;
  }
}
