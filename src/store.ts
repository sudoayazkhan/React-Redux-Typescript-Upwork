import { createStore } from 'redux'
import {widgetsReducer} from './widgetReducer'

export const store = createStore(widgetsReducer)