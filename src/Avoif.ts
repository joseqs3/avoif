import { Handler } from './Handler';
import { Condition } from './Condition'
import { NodeHandler } from './NodeHandler'
import { NodesChainManager } from './NodesChainManager'

export class Avoif {

    set = (conditions: Condition | Condition[], callBack: Function): this => {
        const newNode: Handler = new NodeHandler(conditions, callBack);
        this.chainManager.add(newNode)
        return this
    }

    get = (toCheckdata: JSON): Function | null => {
        return this.chainManager.get().handle(toCheckdata)
    }

    private chainManager: NodesChainManager

    constructor(conditions: Condition | Condition[], callBack: Function) {
        const firstNode: Handler = new NodeHandler(conditions, callBack);
        this.chainManager = new NodesChainManager(firstNode)
    }

}
