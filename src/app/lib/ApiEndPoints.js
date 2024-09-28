import Env from "./Env";

export const SEVER_ENDPOINT = Env.SEVER_ENDPOINT;

export const API_URL = SEVER_ENDPOINT + "/api";

export const LOGIN_URL = API_URL + "/auth/login"
export const LOGOUT_URL = API_URL + "/auth/logout"
export const REGISTER_URL = API_URL + "/auth/register"
export const VERIFY_CREDENTIALS_URL = API_URL + "/auth/checkCredentials"
export const BANK_URL = API_URL + "/auth/bank"