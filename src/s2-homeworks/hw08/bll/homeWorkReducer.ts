import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            if(action.payload === "up"){
                newState.sort((a,b) => a.name.localeCompare(b.name))
            }else{
                newState.sort((a,b) => b.name.localeCompare(a.name))
            }
            return newState
            // by name
        }
        case 'check': {
            return state.filter(el => el.age >= 18) // need to fix
        }
        default:
            return state
    }
}
