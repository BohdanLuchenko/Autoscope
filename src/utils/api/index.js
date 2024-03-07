import { authMicroservice, accountMicroservice, sessionsMicroservice } from "./config";

//AUTH API's
export const authPingRequest = data => authMicroservice().post("requests", data);
export const refresherRequest = data => authMicroservice().post("refresh", data);
export const emailLoginRequest = data => authMicroservice().post("email/login", data);
export const emailRegisterRequest = data => authMicroservice().post("email/register", data);
export const emailConfirmRequest = () => authMicroservice().post("email/confirm/request");
export const emailConfirmTokenRequest = params => authMicroservice().get("email/confirm/:tokenId", params);
export const getAppKeysRequest = () => accountMicroservice().get("application-keys");
export const getProductsRequest = () => accountMicroservice().get("features");
export const getAppSessionsRequest = () => sessionsMicroservice().get("application");
export const removeSessionRequest = id => sessionsMicroservice().delete(`application/${id}`);
export const getAccountRequest = () => accountMicroservice().get("");
export const appLoginRequest = data => authMicroservice().post("application/login", data);
