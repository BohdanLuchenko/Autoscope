import { createSelector } from "reselect"

const rootSelector = store => store;
export const FirmwaresSettingsSelector = createSelector(rootSelector, root => root.Firmwares)