var grade = prompt("Massukan Nilai Kamu: ");

if (grade <= 40) {
    alert("Nilai kamu " + grade + "Grade E");
} else if (grade > 40 && grade <= 65) {
    alert("nilai kamu " + grade + "Grade D");
} else if (grade > 65 && grade <= 75) {
    alert("Nilai kamu" + grade + "Grade C");
} else if (grade > 75 && grade <= 84) {
    alert("Nilai kamu " + grade + "grade B")
} else if (grade > 84 && grade <= 100) {
    alert("nilai kamu " + grade + "Grade A")
} else {
    alert("Mohon Masukkan Angka")
}