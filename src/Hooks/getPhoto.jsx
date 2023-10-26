import Cookies from 'js-cookie';
import axios from 'axios';

export const getPhoto = async (reload) => {

    if(Cookies.get('P_P_URL') && !reload){
        return Cookies.get('P_P_URL')
    }

    const token = Cookies.get('token');

    if (!token) {
        Cookies.remove('token');
        window.location.replace('/');
        return;
    }

    try {

        const response = await axios.get(`http://localhost:8000/api/picture/${token}`);
        Cookies.set('P_P_URL', response.data.url, { expires: 7 })
        return response.data.url

    } catch (error) {

        Cookies.remove('token');
        window.location.replace('/');
        return;

    }
};