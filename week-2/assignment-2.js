function calculate(args) {
    const { n1, n2, op } = args;
    if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
        return "Not Supported"
    }
    else if (op === "+") {
        return (n1 + n2);
    }
    else if (op === "-") {
        return (n1 - n2);
    }
    else if (op === "*") {
        return (n1 * n2);
    }
    else if (op === "/") {
        return (n1 / n2);
    }
}

// calculate({n1: 1, n2: 2, op: "+"});