import axios from "axios"

// database'e gönderilecek komutlar için kullanılan fonksiyonlar.

export const login = (body) => {
    return axios.post("/api/1.0/auth", body);
};

export const getUsers = () => {
    return axios.get("/api/1.0/users");
};

export const getUser = (username) => {
    return axios.get(`/api/1.0/user/${username}`);
}

export const updateUser = (username,body)=>{
    return axios.put(`/api/1.0/user/${username}`,body);
}