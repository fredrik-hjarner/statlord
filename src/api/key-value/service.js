import axios from "axios";

const backend = "http://potifarfar.zapto.org:8080";
/**
 * TODO: I temporarily disabled namespace because backend does not support it.
 */
const namespace = ""; // "TrackLord/";

export default class {
  static getValue(key: string): Promise<string> {
    return axios
      .get(`${backend}/value?key=${namespace}/${key}`)
      .then(({ data }) => data);
  }

  static setValue(key: string, value: string): Promise<string> {
    if (typeof value !== "string") {
      console.log('setValue: typeof value !== "string"');
    }
    /**
     * TODO: This is messed up.
     * key and value should be sent via request body.
     * otherwise maybe url encoding will fuck stuff up??
     */
    return axios.post(`${backend}/value?key=${namespace}${key}&value=${value}`);
  }

  static getAllKeys(): Promise<[string]> {
    return axios.get(`${backend}/keys`).then(({ data }) => data || []);
  }

  static getKeysWithPrefix(prefix: string): Promise<[string]> {
    return axios
      .get(`${backend}/keys?prefix=${namespace}${prefix}`)
      .then(({ data }) => {
        if (!data) {
          return [];
        }
        return data.map(k =>
          k.replace(new RegExp(`^${namespace}${prefix}`), "")
        );
      });
  }

  static deleteAllValues(): Promise<any> {
    return axios.delete(`${backend}/value`);
  }

  static deleteOneValue(key: string): Promise<any> {
    return axios.delete(`${backend}/value?key=${namespace}${key}`);
  }
}
