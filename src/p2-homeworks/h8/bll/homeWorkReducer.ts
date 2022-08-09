import {UserType} from "../HW8";

type ActionType = ReturnType<typeof underageAC>
    | ReturnType<typeof sortAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let sortedCopy = [...state].sort((a,b) => a.name <= b.name ? -1 : 1)
            return action.payload === 'up' ? sortedCopy : sortedCopy.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(f => f.age >= action.payload)
        }
        default:
            return state
    }
}

export const sortAC = (direction: string) => {
    return {type: 'sort', payload: direction} as const
}
export const underageAC = (age: number) => {
    return {type: 'check', payload: age} as const
}