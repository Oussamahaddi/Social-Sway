import { ActionTypesT, InitialStateT } from "../types/Types"
import { DATA } from "../data/usersData"
import { DISLIKE, HIDE_MODAL, LIKE, SHOW_MODAL } from "./type"


const initialState : InitialStateT = {
  data: DATA,
  settingModalVisible: false,
  likeModalVisible : false,
  listPortfolioLiked : [],
}

export const reducer = (state = initialState, action : ActionTypesT) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        settingModalVisible : !state.settingModalVisible
      }
    case HIDE_MODAL:
      return {
        ...state,
        settingModalVisible : !state.settingModalVisible
      }
    case LIKE:
      return {
        ...state,
        listPortfolioLiked : [...state.listPortfolioLiked, action.payload]
      }
    case DISLIKE:
      return {
        ...state,
        listPortfolioLiked : state.listPortfolioLiked.filter((portfolio) => portfolio.id != action.payload.id)
      }
    default:
      return state
  }
}
