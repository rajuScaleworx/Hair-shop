import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class PaymentService {
    successPayment(data) {
        const option = {
          url: `${baseUrl}/paymentsuccess`,
          data,
        };
    
        return axios.post(option);
      }
}
const paymentService = new PaymentService();
export default paymentService;
