const bookTicket = (movie, seats = 1, pricePerSeat = 300) => {
    if (typeof(movie) === "string" && seats > 0 && pricePerSeat > 0) {
        const totalPrice = seats * pricePerSeat;
        return `${movie}: ${seats} seat(s), Total $${totalPrice}`
    }
    else{
        return "Invalid"
    }
}

console.log(bookTicket(123, 2))