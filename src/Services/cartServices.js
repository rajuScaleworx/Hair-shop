import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class ProductCartService {
    getProductDetailBymultiId(data) {
        const option = {
          url: `${baseUrl}/productlistbymultiid`,
          data,
        };
    
        return axios.post(option);
      }
}
const productCartService = new ProductCartService();
export default productCartService;
