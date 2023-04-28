const initState = {
  themeId: 1,
};
type StateType = {
  themeId: number;
};

export const themeReducer = (
  state: StateType = initState,
  action: ActionsType
): StateType => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      let newState = { ...state };
      newState.themeId = action.id;
      return newState;
    default:
      return state;
  }
};

export const changeThemeId = (id: number): any =>
  ({
    type: "SET_THEME_ID",
    id,
  } as const); // fix any
type ChangeThemeIdType = ReturnType<typeof changeThemeId>;

type ActionsType = ChangeThemeIdType;
