import axios from 'axios';

const root = 'http://localhost:5501/';

export const postLogin = async (credenciales) => {
    

     return await axios.post(`${root}users/login`, credenciales);

    //Devuelvo un token hardcodeado
    //return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjpbeyJfaWQiOiI2M2I5NWFiM2JkOWU2MDAxYjNmYzlkYmUiLCJuYW1lIjoiTWFyY29zIiwic3VybmFtZSI6IkzDs3BleiIsImRuaSI6IjIzMjc4NjU2TiIsImVtYWlsIjoibWFyY29zbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRTUnZTYWxRVXBmR3hMT2dhVnNZVlcud095cmk0YkZTZDJRcUVaTzFWN0w0T200cjBjSDcyMiIsInBob25lIjo2OTY3NzY0MjEsIm5hdGlvbmFsaXR5IjoiRXNwYcOxYSIsIl9fdiI6MH1dLCJpYXQiOjE2NzM4NTk1MjgsImV4cCI6MTY3Mzk0NTkyOH0.dTAu9QE_93WMHoRukxUWFo2gwJbCBQb4EjUAqImYtPI';
};

export const postRegister = async (body) => {

    //A continuación vemos como se enviaría el body por axios para el registro
    return await axios.post(`${root}users/`, body)
};

export const getSeries = async () => {

    return await axios.get(`${root}series/getAll`);
};

export const getSearch = async (busqueda) => {

    return await axios.get(`${root}series/tittle/${busqueda}`);
};

//Funcion que alquila
export const postRent = async (body, token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }
    return await axios.post(`${root}rentals/newRental`, body, config);
};

export const allUsersAdmin = async (token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }
    return await axios.get(`${root}rentals/getAll`, config);
};

















 