import api from "../api/config";

export const getCompanies = async () => { 
    let data = await api.get('companies').then(result => result.data);
    return data;
};

export const create = async (company) => { 
    let data = await api.post('companies',company).then(result => result.data);
    return data;
};

export const getSuggestions = async (keyword) => { 
    console.log({keyword});
    let data = await api.get(`suggestions/${keyword}`).then(result => result.data);
    return data;
  };


  export const getArticles = async (keyword) => { 
    console.log({keyword});
    let data = await api.get(`articles`).then(result => result.data);
    return data;
  };