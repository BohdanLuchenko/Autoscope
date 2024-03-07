import { createSelector } from "reselect"

const rootSelector = store => store;
export const MeterReportsSelector = createSelector(rootSelector, root => root.MeterReports)