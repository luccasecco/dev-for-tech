import { Reducer } from 'redux'
import { IGlobalState } from './types'

const INITIAL_STATE: IGlobalState = {
  users: []
}

export const AllUsers: Reducer<IGlobalState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_USER':
      const {user} = action.payload
      console.log(action.payload)  

      return {
        ...state,
        users: [
          ...state?.users,
          user
        ]
      }
      default: {
        return state
      } 
  }
}