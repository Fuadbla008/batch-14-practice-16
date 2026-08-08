const describeDeclaration = (input) => {
    if (input === "let") {
        return "Cannot redeclare, can reassign"
    }
    else if (input === "const") {
        return "Cannot redeclare, cannot reassign"
    }
    else if (input === "var") {
        return "Can redeclare, can reassign"
    }
    else{
        return "Invalid"
    }
}

console.log(describeDeclaration([]));