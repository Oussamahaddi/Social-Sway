import { ActionTypesT, InitialStateT } from "../types/Types"
import { DATA } from "../data/usersData"


const initialState : InitialStateT = {
  data : DATA,
  modalVisible : false
}

export const reducer = (state = initialState, action : ActionTypesT) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        modalVisible : !state.modalVisible
      }
    case 'HIDE_MODAL':
      return {
        ...state,
        modalVisible : !state.modalVisible
      }
    default:
      return state
  }
}
