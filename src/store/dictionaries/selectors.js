import { createSelector } from "reselect";

const rootSelector = store => store;
export const DictionariesSelector = createSelector(rootSelector, root => root.Dictionaries);
