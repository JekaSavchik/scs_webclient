import {apiService} from "../../../shared/services";

class ClusterService extends apiService {
    fetchClusters = () => {
        return this.sendGet('/clusters', true);
    };

    fetchClusterById = (clusterId) => {
        return this.sendGet(`/clusters/${clusterId}`, true);
    }

}

export default ClusterService;
