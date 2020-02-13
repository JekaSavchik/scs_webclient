import {apiService} from "../../../shared/services";

class CommandService extends apiService {

    updatePollingInterval = (nodeId, interval) => {
        return this.sendPost('/nodes/command', {
            command: 'set_polling_interval',
            nodeId: nodeId,
            params: {
                interval: interval,
            }
        }, true);
    };

    toggleState = (nodeId, nodeState) => {
        return this.sendPost('/nodes/command', {
            command: 'toggle_state',
            nodeId: nodeId,
            params: {
                is_online: nodeState,
            }
        }, true)
    };

}

export default CommandService;
