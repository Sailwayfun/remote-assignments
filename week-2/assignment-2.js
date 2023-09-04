function calculate(args) {
    const { n1, n2, op } = args;
    if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
        return "Not Supported"
    }
    if (op === "+") {
        return (n1 + n2);
    }
    if (op === "-") {
        return (n1 - n2);
    }
    if (op === "*") {
        return (n1 * n2);
    }
    if (op === "/") {
        return (n1 / n2);
    }
}

calculate({n1: 5, n2: 7, op: "*"});