import {createSelector} from "reselect";

const rootSelector = store => store;
export const ForgetPasswordSelector = createSelector(rootSelector, root => root.ForgetPassword);
