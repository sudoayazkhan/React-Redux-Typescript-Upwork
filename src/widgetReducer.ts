import { Action } from "./actions"

export interface WidgetsState {
  widgets: string[]
}

const initialState = {
  widgets: []
}

export const widgetsReducer = (state:WidgetsState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_WIDGET": {
      return {...state, widgets: [...state.widgets, action.payload]}
    }
    default:
      return state
  }
}