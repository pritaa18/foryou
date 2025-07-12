const button = document.querySelector('.btn-start');
const character = document.getElementById('character');
const text = document.getElementById('romanticText');

button.addEventListener('click', () => {
  // Tampilkan karakter
  character.classList.add('show');

  // Setelah 2.5 detik, sembunyikan karakter
  setTimeout(() => {
    character.classList.remove('show');
    character.classList.add('hide');
  }, 2500);

  // Setelah karakter hilang, mulai animasi teks
  setTimeout(() => {
    // 1. Tampilkan "HAI"
    text.textContent = "HAI 🌸";
    text.style.opacity = 1;

    // 2. Setelah 2 detik, sembunyikan "HAI"
    setTimeout(() => {
      text.style.opacity = 0;

      // 3. Setelah hilang, ketik teks romantis huruf per huruf
      setTimeout(() => {
        const message1 = "Di kehidupan yang singkat ini, sayang sekali jika menghabiskan hidup sendiri, Maka dari itu.. Maukah kau hidup bersamaku...";
        let index1 = 0;
        text.textContent = "";
        text.style.opacity = 1;

        const typing1 = setInterval(() => {
          text.textContent += message1[index1];
          index1++;
          if (index1 >= message1.length) {
            clearInterval(typing1);

            // 4. Setelah selesai message1, ketik "Kelas DEKKK"
            setTimeout(() => {
              const message2 = "Kelas DEKKK🔥";
              let index2 = 0;
              text.textContent = "";

              const typing2 = setInterval(() => {
                text.textContent += message2[index2];
                index2++;
                if (index2 >= message2.length) {
                  clearInterval(typing2);

                  // 5. Setelah selesai ngetik, tampilkan kalimat penutup
                  setTimeout(() => {
                    text.style.opacity = 0;

                    setTimeout(() => {
                      text.textContent = "Terima kasih sudah baca web orang GABUT 🤍";
                      text.style.opacity = 1;
                    }, 1000);

                  }, 2500); // jeda setelah teks kedua selesai
                }
              }, 50);
            }, 1000); // jeda sebelum mulai ketik teks kedua
          }
        }, 50);
      }, 1000); // jeda setelah HAI menghilang
    }, 2000); // waktu HAI tampil
  }, 6000); // setelah karakter selesai animasi
});
