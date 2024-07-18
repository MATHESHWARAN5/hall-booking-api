class Booking {
    constructor(bookingId, customerName, date, startTime, endTime, roomId) {
        this.bookingId = bookingId;
        this.customerName = customerName;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.roomId = roomId;
    }
}

module.exports = Booking;
