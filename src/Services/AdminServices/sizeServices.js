import Axios from "../../helper/adminaxioshelper";
import { BASEURL } from "../../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class SizeService {
    createSize(data) {
        const option = {
          url: `${baseUrl}/size`,
          data,
        };
        return axios.post(option);
      }
      getSize() {
        const option = {
          url: `${baseUrl}/size`,
        };
        return axios.get(option);
      }
      updateSize(data) {
        const option = {
          url: `${baseUrl}/size_update`,
          data,

        };
        return axios.post(option);
      }
      deleteSize(id) {
        const option = {
          url: `${baseUrl}/size/${id}`,

        };
        return axios.delete(option);
      }
    }
    
const sizeService = new SizeService();
export default sizeService;
