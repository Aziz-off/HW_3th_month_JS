function ValidMail() {
    const emailPattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const usersEmail = document.getElementById('email').value;
    const valid = emailPattern.test(usersEmail);
    if (valid) {
        mess = 'Success! E-mail соответствует требованиям поля!';

    } else {
        mess = 'Error! Вы неверно ввели e-mail. Попробуйте еще раз';
    }
    document.getElementById('info1').innerHTML = mess;
    return valid;
}

function ValidPhone() {
    const phonePattern = /^\+\d[\d\(\)\ -]{4,14}\d$/;
    const usersPhone = document.getElementById('phone').value;
    const valid = phonePattern.test(usersPhone);
    if (valid) {
        mess = 'Success! Номер телефона соответствует требованиям поля!';
    } else {
        mess = 'Error! Вы неверно ввели номер телефона. Номер должен начинаться с +996';
    }
    document.getElementById('info2').innerHTML = document.getElementById('info').innerHTML+'<br />'+ mess;
    return valid;
}