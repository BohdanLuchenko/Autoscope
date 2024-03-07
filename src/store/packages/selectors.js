import { createSelector } from "reselect";

const rootSelector = store => store;
export const PackagesSelector = createSelector(rootSelector, root => root.Packages);
