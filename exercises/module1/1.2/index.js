function addDateTime(message) {
    const dateTimeNow = new Date();
    console.log(dateTimeNow.toLocaleDateString());
    console.log(dateTimeNow.toLocaleTimeString());
    return message + dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString();
}

alert(addDateTime("Salut, il est "))