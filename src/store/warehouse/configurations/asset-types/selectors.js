import {createSelector} from "reselect";

const rootSelector = store => store;
export const AssetTypesSelector = createSelector(rootSelector, root => root.AssetTypes);
