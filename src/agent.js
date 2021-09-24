import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = "http://localhost:8080";
const responseBody = (response) => response.body;

export const requests = {
  get: (url) => superagent.get(`${API_ROOT}${url}`).then(responseBody),
};
