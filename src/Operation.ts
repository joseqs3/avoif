import { Strategy } from "./Strategy";

export class Operation implements Strategy {
    private name: string;

    private handler: Function

    execute(args: { val1: string, val2: string} ): Boolean {
        return this.handler(args.val1, args.val2)
    }

    getName(): string{
        return this.name
    }

    constructor(name: string, handler: Function) {
        this.handler = handler;
        this.name = name;
    }
}