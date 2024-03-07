import {createSelector} from "reselect";

const rootSelector = store => store;
export const DepotSelector = createSelector(rootSelector, root => root.Depot);
