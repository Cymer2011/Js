// area_of_rectangle.js

// İstifadəçidən düzbucağın tərəflərini alın: en və uzunluq
var en = parseFloat(prompt("Duzbucagin enini daxil edin:"));
var uzunluq = parseFloat(prompt("Duzbucaqin sahesi uzunluğunu daxil edin:"));

// Sahəni hesablayın
var sahe = en * uzunluq;

// Nəticəni göstərin
alert("Duzbucagin sahəsi: " + sahe);




// age_calculator.js

// İstifadəçidən doğum ilini alın
var dogumIli = parseInt(prompt("Doğum ilinizi daxil edin:"));

// Cari ilə çıxın
var cariIl = new Date().getFullYear();

// Yaşı hesablayın
var yas = cariIl - dogumIli;

// Nəticəni göstərin
alert("Yaşınız: " + yas);






// km_to_mil.js

// İstifadəçidən kilometr dəyərini alın
var km = parseFloat(prompt("Kilometr dəyərini daxil edin:"));

// Kilometri milə çevirin
var mil = km * 0.6214;

// Nəticəni göstərin
alert("Mil dəyəri: " + mil);
