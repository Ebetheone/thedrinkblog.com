import axios from "axios";

const instance: any = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export default instance;
