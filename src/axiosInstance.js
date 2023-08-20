// import axios from "axios";

// const baseURL = 'https://student-info-294ff-default-rtdb.firebaseio.com/';

// const axiosInstance = axios.create({baseURL, headers:  {  
//     'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
//     'Content-Type': 'application/json',
//  }
// });

// export default axiosInstance;


import axios from 'axios';

const baseURL = 'https://student-info-294ff-default-rtdb.firebaseio.com/';

const fetchClient = () => {
    const defaultOptions = {
        baseURL: baseURL,
        headers: {  
            'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
            'Content-Type': 'application/json',
         }
    };
    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });

    return instance;
};

export default fetchClient();