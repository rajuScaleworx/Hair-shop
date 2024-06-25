import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class ProductCollectionService {
    getProductCollection() {
        const option = {
          url: `${baseUrl}/collectiontype`,
        };
    
        return axios.get(option);
      }
}
const productCollectionService = new ProductCollectionService();
export default productCollectionService;
