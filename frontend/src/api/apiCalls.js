import axios from "axios"

export const login = (body) => {
    return axios.post("/api/1.0/auth",body);
};

// export const login = (body) => {
//     return axios.post("/api/1.0/auth",{},{auth:body});
// };
