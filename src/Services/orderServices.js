import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class OrderService {
    getorderlist(id) {
        const option = {
          url: `${baseUrl}/orderlist/${id}`,
          
        };
    
        return axios.get(option);
      }
}
const prderService = new OrderService();
export default prderService;
