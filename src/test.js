const _ = require('lodash')

function getOperator(name) {
    const oper = {
        "==": (op, val) => op == val,
        "!=": (op, val) => op != val
    }
    return oper[name]
}


function prueba() {

    const coomingData = { operation: 'save', status: 'publish' }

    const data = [{ param: "operation", operator: "==", value: "save" }, { param: "status", operator: "==", value: "publish" }]

    const result = data.reduce((acc, curr) => {
        let operatorStrategy = getOperator(curr.operator)
        curr = operatorStrategy(coomingData[curr.param], curr.value)
        return acc && curr
    }, true)


    console.log(result);

}

prueba()