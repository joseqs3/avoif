import { AbstractHandler } from './AbstractHandler'
import { Condition } from './Condition'

export class NodeHandler extends AbstractHandler {

    command: Function;
    conditions: Condition[];

    constructor(conditions: Condition[] | Condition, command: Function) {
        super();
        if (!Array.isArray(conditions)) conditions = [conditions]
        this.conditions = conditions
        this.command = command
    }

    public handle(request: any): null | Function {
        const result = this.conditions.reduce((acc: Boolean, curr) => {
            let operatorStrategy = this.operationManager.get(curr.operator);
            return acc && operatorStrategy.execute({ val1: request[curr.param], val2: curr.value })
        }, true)
        if (result) return this.command
        return super.handle(request);
    }
}