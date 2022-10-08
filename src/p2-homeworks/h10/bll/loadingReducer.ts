export type StateType = {
    loading: boolean
}

const initState: StateType= {
    loading: false
}

type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => ({type: 'LOADING', loading} as const) // fix any