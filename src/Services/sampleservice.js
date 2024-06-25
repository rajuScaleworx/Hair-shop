import Axios from "../helper/axioshelper";
import { BASEURL } from "../constant/constant";

const axios = new Axios();
const baseUrl = BASEURL;

class CareProviderService {
  getCareProviders() {
    const option = {
      url: `${baseUrl}/careproviders`,
    };

    return axios.get(option);
  }

  getCareProviderById(id) {
    const option = {
      url: `${baseUrl}/careprovider/${id}`,
    };

    return axios.get(option);
  }

  updateCare(data) {
    const option = {
      url: `${baseUrl}/careprovider`,
      data,
    };

    return axios.put(option);
  }

  createCare(data) {
    const option = {
      url: `${baseUrl}/careprovider`,
      data,
    };

    return axios.post(option);
  }

  postPatientLogs(id, data) {
    const option = {
      url: `${baseUrl}/postpatientData/${id}`,
      data,
    };

    return axios.post(option);
  }
}

const careProviderService = new CareProviderService();
export default careProviderService;
