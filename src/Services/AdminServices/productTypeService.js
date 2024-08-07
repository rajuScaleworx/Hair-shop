import Axios from "../../helper/adminaxioshelper";
import { BASEURL } from "../../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class ProductTypeService {
    createProductType(data) {
        const option = {
          url: `${baseUrl}/product_type`,
          data,
        };
        return axios.post(option);
      }
      getProductType() {
        const option = {
          url: `${baseUrl}/product_type`,
        };
        return axios.get(option);
      }
      updateProductType(data) {
        const option = {
          url: `${baseUrl}/product_type_update`,
          data,

        };
        return axios.post(option);
      }
      deleteProductType(id) {
        const option = {
          url: `${baseUrl}/product_type/${id}`,

        };
        return axios.delete(option);
      }
    }
    
const productTypeService = new ProductTypeService();
export default productTypeService;
