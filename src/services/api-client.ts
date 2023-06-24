import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "759ede2c41e047ea8b449322545632aa",
  },
});
