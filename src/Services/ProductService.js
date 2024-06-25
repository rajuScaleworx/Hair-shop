import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class ProductService {
    getProduct() {
        const option = {
          url: `${baseUrl}/product`,
        };
    
        return axios.get(option);
      }
      getProductDEtailByid(id) {
        const option = {
          url: `${baseUrl}/product/${id}`,
        };
    
        return axios.get(option);
      }
      getproductlistbytype(type){
        const option = {
          url: `${baseUrl}/productlist/${type}`,
        };
    
        return axios.get(option);
      }
}
const productService = new ProductService();
export default productService;
