import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      return [...state].sort((a, b) =>
        action.payload === "up"
          ? a.name > b.name
            ? 1
            : -1
          : a.name < b.name
          ? 1
          : -1
      );
    }
    case "check": {
      return state.filter((el) => el.age > action.payload);
    }
    default:
      return state;
  }
};
