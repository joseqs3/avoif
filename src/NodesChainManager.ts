import { Handler } from './Handler'
import { Manager } from './Manager';

export class NodesChainManager implements Manager<Handler> {

    private firstNode: Handler
    private lastNode: Handler

    add(newNode: Handler): this {
        this.lastNode.setNext(newNode);
        this.lastNode = newNode;
        return this
    }
    get(): Handler {
       return this.firstNode
    }
    constructor(firstNode: Handler) {
        this.firstNode = firstNode;
        this.lastNode = firstNode;
    }
}