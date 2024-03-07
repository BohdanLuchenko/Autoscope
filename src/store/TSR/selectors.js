import { createSelector } from "reselect";

const rootSelector = store => store;
export const TSRSelector = createSelector(rootSelector, root => root.TSR);
