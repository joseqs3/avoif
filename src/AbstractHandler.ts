import { Handler } from './Handler';
import { OperationManager } from './OperationManager'
import { Operation } from './Operation';

export abstract class AbstractHandler implements Handler
{
    protected nextHandler: Handler | undefined;
    protected operationManager: OperationManager;

    constructor(){
        this.operationManager = new OperationManager()
        const equal = new Operation('==', (val1: any, val2: any): boolean => val1 == val2)
        const diff = new Operation('!=', (val1: any, val2: any): boolean => val1 != val2)
        const equalT = new Operation('===', (val1: any, val2: any): boolean => val1 === val2)
        const diffT = new Operation('!==', (val1: any, val2: any): boolean => val1 !== val2)
        const greater = new Operation('>', (val1: number, val2: number): boolean => val1 > val2)
        const less = new Operation('<', (val1: number, val2: number): boolean => val1 < val2)
        const greaterE = new Operation('>=', (val1: number, val2: number): boolean => val1 >= val2)
        const lessE = new Operation('<=', (val1: number, val2: number): boolean => val1 <= val2)
        this.operationManager.add(equal).add(diff).add(equalT).add(diffT).add(greater).add(less).add(greaterE).add(lessE)

    }

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: any): any {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}