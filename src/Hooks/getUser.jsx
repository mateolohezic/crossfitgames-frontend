import Cookies from 'js-cookie';
import axios from 'axios';

export const getUser = async () => {
    const token = Cookies.get('token');
    if (!token) {
        Cookies.remove('token');
        window.location.replace('/');
        return;
    }
    try {
        const response = await axios.get(`http://localhost:8000/api/user/${token}`);
        if (response.data.permissions === 'user' || response.data.permissions === 'admin') {
            return response.data
        } else {
            Cookies.remove('token');
            window.location.replace('/');
            return;
        }
    } catch (error) {
        Cookies.remove('token');
        window.location.replace('/');
        return;
    }
};