import { createStore } from 'redux'
import { AllUsers } from './modules/user/reducer'

export const store = createStore(AllUsers)