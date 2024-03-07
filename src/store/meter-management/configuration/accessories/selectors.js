import { createSelector } from "reselect"

const rootSelector = store => store;
export const AccessoriesSelector = createSelector(rootSelector, root => root.Accessories)