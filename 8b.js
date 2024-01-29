// Daftar menu makanan beserta harganyax
const menu = {
    nasiGoreng: 15000,
    mieGoreng: 12000,
    ayamGeprek: 18000,
    sotoAyam: 16000,
  };
  
  // Menggunakan prompt untuk meminta pengguna memilih menu
  let pesanan = prompt("Menu makanan yang tersedia:\n1. nasi goreng\n2. mie goreng\n3. ayam geprek\n4. soto ayam\n\nSilahkan Pilih Makanan:");
  
  // Menggunakan pengkondisian untuk menentukan harga berdasarkan pilihan pengguna
  let harga = 0;
  if (pesanan === "1") {
    harga = menu.nasiGoreng;
  } else if (pesanan === "nasi goreng") {
    harga = menu.mieGoreng;
  } else if (pesanan === "mie goreng") {
    harga = menu.ayamGeprek;
  } else if (pesanan === "ayam geprek") {
    harga = menu.sotoAyam;
  } else if (pesanan === "soto ayam") {
    harga = menu.bakso;
  } else {
    alert("Nomor menu tidak valid.");
    // Keluar dari program jika nomor menu tidak valid
    throw new Error("Terminating program.");
  }
  
  // Menggunakan prompt untuk meminta pengguna memasukkan jumlah makanan yang diinginkan
  let jumlah = prompt("Masukkan jumlah makanan yang diinginkan:");
  
  // Menghitung total biaya
  let totalBiaya = harga * jumlah;
  
  // Menampilkan hasil kepada pengguna
  alert("Detail Pesanan:\nMenu: " + pesanan + "\nJumlah: " + jumlah + "\nTotal Biaya: Rp " + totalBiaya);

  alert("Terimakasih Sudah Memesan !!  ");