import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class AuthService {
    createcustomer(data) {
        const option = {
          url: `${baseUrl}/addCustomer`,
          data,
        };
        return axios.post(option);
      }
      getcustomerbyid(id) {
        const option = {
          url: `${baseUrl}/customer/${id}`,
        };
        return axios.get(option);
      }
      createcustomeraddress(data) {
        const option = {
          url: `${baseUrl}/addCustomeradd`,
          data,
        };
        return axios.post(option);
      }
      // /customeradd/:id
      getcustomeraddressbyuserid(data) {
        const option = {
          url: `${baseUrl}/customeradd/${data}`,
        };
        return axios.get(option);
      }
      loginadmin(data){
        const option = {
          url: `${baseUrl}/login`,
          data,
        };
        return axios.post(option);
      }
}
const authService = new AuthService();
export default authService;
