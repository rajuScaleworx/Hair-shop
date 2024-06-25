// import Cookies from "universal-cookie";
import axios from "axios";

// const cookies = new Cookies();

export default class Axios {
  get(options) {
    options.method = "get";
    // options.headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios(options)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  post(options) {
    console.log("options", options);
    options.method = "POST";
    // options.headers = options?.headers ? options.headers : this.getHeaders();
    console.log("options", options);
    return new Promise((resolve, reject) => {
      axios(options)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  upload(options) {
    options.method = "POST";
    // options.headers = this.getHeaders();
    // options.headers["content-type"] = "multipart/form-data";
    return new Promise((resolve, reject) => {
      axios(options)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  patch(options) {
    options.method = "PATCH";
    // options.headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios(options)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  put(options) {
    options.method = "PUT";
    // options.headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios(options)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  delete(options) {
    options.method = "DELETE";
    // options.headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios(options)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

//   getHeaders() {
//     console.log(this);
//     return {
//       Authorization: `Bearer ${cookies.get("truss_session") || undefined}`,
//     };
//   }
 }
