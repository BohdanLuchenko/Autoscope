import { createSelector } from "reselect"

const rootSelector = store => store;
export const MeterCommandsSelector = createSelector(rootSelector, root => root.MeterCommands)