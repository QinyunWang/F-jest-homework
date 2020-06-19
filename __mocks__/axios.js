const axios = jest.genMockFromModule("axios");

function get() {
  return Promise.resolve({ data: "Alex" });
}

function post() {
  return Promise.resolve({ data: "CREATED" });
}

axios.get = get;
axios.post = post;

module.exports = axios;
