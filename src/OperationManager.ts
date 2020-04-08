import { Manager } from './Manager';
import { Operation } from './Operation';

export class OperationManager implements Manager<Operation> {

    operations: Operation[] = [];

    add(operation: Operation): this {
        this.operations = [...this.operations, operation]
        return this
    }
    get(name: any): Operation {
        const operation: Operation | undefined = this.operations.find((operation: Operation) => operation.getName() == name)
        if(operation == undefined) throw new Error(`Operation: ${name}, was not found`)
        return operation
    }
}