function grade() {
    var score = document.getElementById('score').value;
    var show = document.getElementById('show');
    switch (true) {
        case score <= 100 && score >= 90:
            show.value = '1等生';
            break;
        case score < 90 && score >= 80:
            show.value = '2等生';
            break;
        case score < 80 && score >= 70:
            show.value = '3等生';
            break;
        case score < 70 && score >= 60:
            show.value = '4等生';
            break;
        case score < 60 && score >= 50:
            show.value = '5等生';
            break;
        case score < 50 && score >= 40:
            show.value = '6等生';
            break;
        case score < 40 && score >= 30:
            show.value = '7等生';
            break;
        case score < 30 && score >= 20:
            show.value = '8等生';
            break;
        case score < 20 && score >= 10:
            show.value = '9等生';
            break;
        case score < 10 && score >= 0:
            show.value = '10等生';
            break;
        default:
            show.value = '输入的成绩不合法';
    }
}
