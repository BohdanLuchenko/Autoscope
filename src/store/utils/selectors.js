import { createSelector } from "reselect";

const rootSelector = store => store;
export const UtilsSelector = createSelector(rootSelector, root => root.Utils);
