// File: script.js

// 1. Fungsi untuk menghasilkan warna heksadesimal acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 2. Mendapatkan elemen-elemen yang dibutuhkan dari DOM
const profileCard = document.querySelector('.profile-card');
const tagline = document.querySelector('.tagline');
const continueButton = document.querySelector('.continue-button');

// 3. Menambahkan Event Listener pada Kartu Profil

// Efek saat kursor masuk (mouseover)
profileCard.addEventListener('mouseover', () => {
    // A. Mengubah warna tagline secara acak
    tagline.style.color = getRandomColor();

    // B. Mengubah cursor menjadi pointer untuk menunjukkan interaksi
    profileCard.style.cursor = 'pointer';
});

// Efek saat kursor keluar (mouseout)
profileCard.addEventListener('mouseout', () => {
    // Mengembalikan warna tagline ke warna default (hijau)
    tagline.style.color = '#4CAF50';
    profileCard.style.cursor = 'default';
});

// 4. Menambahkan Event Listener pada Tombol Lanjut
continueButton.addEventListener('click', (event) => {
    // Menampilkan pesan pop-up sebelum pindah halaman
    alert('Terima kasih! Bersiap menuju halaman selanjutnya...');
    
    // Catatan: Karena kita tidak memanggil event.preventDefault(),
    // browser akan melanjutkan navigasi ke halaman tujuan setelah alert ditutup.
});