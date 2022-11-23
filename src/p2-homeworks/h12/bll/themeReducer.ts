
export type ThemeStateType = {
    themeColor: string
}

const initState = {
    themeColor: 'dark'
}

type ActionType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, themeColor: action.color};
        }
        default:
            return state;
    }
};

export const changeThemeC = (color: string) => ({type: "CHANGE-THEME", color}) as const; // fix any