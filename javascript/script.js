// alert("Belajar Javascript");

// function kirim(){
// // ambil value nama
// let nama = document.getElementById('nama').value;
// console.log("Nama : "+nama);

// let saran = document.getElementById('saran').value;
// console.log("Saran : "+saran);

// //tampilkan nama ke ul id=list-pesan
// document.getElementById('list-pesan').innerHTML += `<li>${nama} - ${saran}</li>`;
// document.getElementById('list-pesan').innerHTML += `<tr><td>${nama}</td><td>${saran}</td></tr>`;
// }

function kirim() {
    // ambil value
    let nama = document.getElementById('nama').value;
    let saran = document.getElementById('saran').value;

    console.log("Nama : " + nama);
    console.log("Saran : " + saran);

    // tambah ke tabel
    document.getElementById('list-pesan').innerHTML += 
        `<tr>
            <td>${nama}</td>
            <td>${saran}</td>
        </tr>`;
}