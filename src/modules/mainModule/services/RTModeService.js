import { apiService } from "../../../shared/services";

class RTModeService extends apiService {
    fetchRTData = (nodeId) => {
        return this.sendPost('/nodes/command', {
            command: 'get_rt_mode_data',
            nodeId: nodeId,
            params: {}
        }, true);
    };
}

export default RTModeService;
