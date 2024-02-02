import { HIDE_MODAL, SHOW_MODAL } from "./type"


export const showModal = () => {
  return {
    type : SHOW_MODAL,
    payload : undefined
  }
}

export const hideModal = () => {
  return {
    type : HIDE_MODAL,
    payload: undefined
  }
}