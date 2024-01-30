var siswa = new Object();
siswa.namaDepan = "Hazel";
siswa.namaBelakang = "Arsya";
siswa.alamat = "Bandung";
siswa.namaLengkap = function () {
    return this.namaDepan + ' ' + this.namaBelakang
}

var siswa2 = {
    namaDepan: "Ujang",
    namaBelakang: "Gunawan",
    namaLengkap: function(){
        return this.namaDepan + ' ' + this.namaBelakang
    }
}

alert("Nama : " + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());
// function namaLengkap() {
    
// }