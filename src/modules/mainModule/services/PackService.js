import { apiService } from "../../../shared/services";

class PackService extends apiService {
    fetchPacks = (params) => {
        return this.sendGet(`/packs?node=${params.nodeId}&from=${params.from}&to=${params.to}&data_type=${params.dataType}`,
            true);
    };
}

export default PackService;
