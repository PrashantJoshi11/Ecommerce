import axios from "axios";

const baseUrl="http://localhost:5000/api";

export const publicrequest=axios.create({
    baseUrl:baseUrl,
});