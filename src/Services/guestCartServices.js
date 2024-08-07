import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class GuestCartService {
    addguestcart(data) {
        const option = {
            url: `${baseUrl}/addguestcart`,
            data,
        };

        return axios.post(option);
    }
    getguestcart(id) {
        const option = {
            url: `${baseUrl}/getguestcart/${id}`,
        };
        return axios.get(option);
    }
}
const guestCartService = new GuestCartService();
export default guestCartService;
