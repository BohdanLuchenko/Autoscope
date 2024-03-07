import { createSelector } from "reselect"

const rootSelector = store => store;
export const LoginSelector = createSelector(rootSelector, root => root.Login)