import {createSelector} from "reselect";

const rootSelector = store => store;
export const StatsSelector = createSelector(rootSelector, root => root.stats);
