import { ActionType, PortfolioT } from "../types/Types"
import { DISLIKE, HIDE_MODAL, LIKE, SHOW_MODAL } from "./type"


export const showModal = () : ActionType<typeof SHOW_MODAL, undefined> => {
  return {
    type : SHOW_MODAL,
    payload : undefined
  }
}

export const hideModal = () : ActionType<typeof HIDE_MODAL, undefined> => {
  return {
    type : HIDE_MODAL,
    payload: undefined
  }
}

export const likePortfolio = (portfolio : PortfolioT) : ActionType<typeof LIKE, PortfolioT> => {
  return {
    type : LIKE,
    payload : portfolio
  }
}

export const dislikePortolio = (portfolio : PortfolioT) : ActionType<typeof DISLIKE, PortfolioT> => {
  return {
    type : DISLIKE,
    payload : portfolio
  }
}