const initState = {
    themeId: 1,
}

export const themeReducer = (state: typeof initState = initState, action: themeReducerActionTypes): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID' : {
            return {...state, themeId: action.id};
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type themeReducerActionTypes = ReturnType<typeof changeThemeId>
