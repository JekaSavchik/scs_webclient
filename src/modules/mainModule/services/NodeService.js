import {apiService} from "../../../shared/services";

class NodeService extends apiService {

    updateNode = (nodeId, title) => {
        return this.sendPatch(`/nodes/${nodeId}`, {
            title,
        }, true);
    };
}

export default NodeService;
