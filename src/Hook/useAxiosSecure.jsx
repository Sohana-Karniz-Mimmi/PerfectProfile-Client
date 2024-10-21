import axios from "axios";
import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_LOCALHOST_API_URL,
    withCredentials: true
});

const useAxiosSecure = () => {

    const { logOut } = useAuth()
    // const navigate = useNavigate()

    axiosSecure.interceptors.response.use(res => {
        return res
    }, error => {
        console.log('error taker in the intercept', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
            console.log('User Log out');
            logOut()
                .then(() => {
                    // navigate('/')
                    document.getElementById("my_modal_3").showModal();

                    // navigate('/'); // First navigate to the home route
                    // setTimeout(() => {
                    //     document.getElementById("my_modal_3").showModal(); // Show modal after some delay
                    // }, 100); // Adding a short delay (100ms)
                    
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    })

    return axiosSecure;
};

export default useAxiosSecure;