import api from "../api/config";

export const getOffers = async () => {

    // const config = {
    //     headers:{
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     }
    // };

    let data = await api.get('offers').then(result => result.data);
    return data;
};