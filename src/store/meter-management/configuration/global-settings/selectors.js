import { createSelector } from "reselect"

const rootSelector = store => store;
export const GlobalSettingsSelector = createSelector(rootSelector, root => root.GlobalSettings)