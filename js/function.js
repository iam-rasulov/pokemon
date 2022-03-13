function formatDate(format){
    var date = new Date(format);
    var day = date.getDate();
    var month = String(date.getMonth() + 1).padStart(2,0);
    var year = date.getFullYear();

    return `${day}.${month}.${year}`;
}