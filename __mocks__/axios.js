const axios = jest.genMockFromModule("axios");

function get() {
  return Promise.resolve({ data: "Alex" });
}

axios.get = get;

module.exports = axios;
