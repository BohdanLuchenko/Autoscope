import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Login from "./auth/login/reducer";
import Profile from "./auth/profile/reducer";
import AssetTypes from "./warehouse/configurations/asset-types/reducer";
import metrics from "./dashboard/metrics/reducer";
import stats from "./dashboard/stats/reducer";
import assets from "./warehouse/assets/reducer";
import Tasks from "./operations/tasks/reducer";
import Depot from "./auth/depotLogin/reducer";
import Firmwares from "./meter-management/configuration/firmware/reducer";
import Accessories from "./meter-management/configuration/accessories/reducer";
import GlobalSettings from "./meter-management/configuration/global-settings/reducer";
import MeterReports from "./meter-management/logs/reports/reducer";
import MetersRegistration from "./meter-management/preparation/registration/reducer";
import MeterCommands from "./meter-management/meters/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Packages from "store/packages/reducer";
import Dictionaries from "store/dictionaries/reducer";
import TSR from "store/TSR/reducer";
import Utils from "store/utils/reducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    Depot,
    Tasks,
    assets,
    AssetTypes,
    MetersRegistration,
    MeterCommands,
    Firmwares,
    Accessories,
    GlobalSettings,
    MeterReports,
    Login,
    Profile,
    metrics,
    stats,
    ForgetPassword,
    Packages,
    Dictionaries,
    TSR,
    Utils,
  });

export default rootReducer;
