import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class ProductTypeService {
    getProductType() {
        const option = {
          url: `${baseUrl}/product_type`,
        };
    
        return axios.get(option);
      }
}
const productTypeService = new ProductTypeService();
export default productTypeService;
