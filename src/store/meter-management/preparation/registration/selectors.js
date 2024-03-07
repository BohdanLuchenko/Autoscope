import { createSelector } from "reselect";

const rootStore = store => store

export const MeterRegSelector = createSelector(rootStore,state => state.MetersRegistration)