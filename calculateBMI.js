const calculateBMI = (Weight, Height) => {
    if (Weight > 0 && Height > 0) {
        const bMI = Weight / (Height * Height)
        const finalBMI = bMI.toFixed(2);
        const result = parseInt(finalBMI);
        return result;
    }
    else{
        return "Invalid"
    }
}

console.log(calculateBMI(64,1.76784))