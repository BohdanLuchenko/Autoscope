import { createSelector } from "reselect"

const rootSelector = store => store;
export const ProfileSelector = createSelector(rootSelector, root => root.Profile)