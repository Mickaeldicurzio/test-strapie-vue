import axios from "axios";

const instanceApi = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    },
});

export default instanceApi;
