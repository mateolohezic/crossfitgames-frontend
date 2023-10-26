export const calculateAge = async (birthdate) => {
    try {
        const birthdateDate = new Date(birthdate);
        const currentDate = new Date();

        const ageInMilliseconds = currentDate - birthdateDate;
        const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

        return ageInYears
    } catch (error) {
        Cookies.remove('token');
        window.location.replace('/');
        return;
    }
};