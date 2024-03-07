import {createSelector} from "reselect";

const rootSelector = store => store;
export const MetricsSelector = createSelector(rootSelector, root => root.metrics);
