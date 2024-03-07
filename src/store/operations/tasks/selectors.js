import {createSelector} from "reselect";

const rootSelector = store => store;
export const TaskSelector = createSelector(rootSelector, root => root.Tasks);
