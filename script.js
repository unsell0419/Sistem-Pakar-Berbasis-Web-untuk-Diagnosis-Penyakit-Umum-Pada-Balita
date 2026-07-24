document
  .getElementById("symptom-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const symptoms = Array.from(
      document.querySelectorAll('input[name="symptoms"]:checked')
    ).map((el) => el.value);
    const resultElement = document.getElementById("result");
    const suggestionElement = document.getElementById("suggestion");

    let result = "";
    let suggestion = "";

    // Memeriksa kombinasi gejala
    if (
      symptoms.includes("demam") &&
      symptoms.includes("lesu") &&
      symptoms.includes("nafsu makan berkurang") &&
      symptoms.includes("kelelahan")
    ) {
      result =
        "Diagnosis: Infeksi virus. Infeksi virus merupakan merupakan kondisi yang umum terjadi akibat sistem kekebalan tubuh yang masih berkembang.";
      suggestion =
        "Berikan banyak cairan hangat seperti air putih atau ASI untuk mencegah dehidrasi. Kompres hangat pada dahi, ketiak, dan selangkangan dapat membantu menurunkan demam. Pastikan balita Anda mendapatkan istirahat yang cukup. Jika demam tinggi, muntah-muntah, atau diare terus-menerus, segera bawa balita Anda ke dokter untuk mendapatkan penanganan medis yang tepat. Jangan memberikan obat sembarangan tanpa anjuran dokter.";
    } else if (
      symptoms.includes("batuk") &&
      symptoms.includes("pilek") &&
      symptoms.includes("serak") &&
      symptoms.includes("nafas") &&
      symptoms.includes("hidung tersumbat") &&
      symptoms.includes("bersin") &&
      symptoms.includes("sesak")
    ) {
      result =
        "Diagnosis: ISPA (Infeksi Saluran Pernapasan Akut). ISPA adalah infeksi saluran pernapasan akut yang bisa menimbulkan batuk, pilek, dan hidung tersumbat.";
      suggestion =
        "Berikan banyak cairan hangat seperti air putih atau teh herbal tanpa kafein untuk membantu mengencerkan lendir dan mencegah dehidrasi. Istirahatkan balita di ruangan yang tenang dan sejuk. Kompres hangat pada dahi dapat membantu menurunkan demam. Jika balita kesulitan bernapas atau demamnya tinggi, segera bawa ke dokter. Hindari memberikan obat sembarangan tanpa anjuran dokter, terutama pada bayi.";
    } else if (symptoms.includes("telan") && symptoms.includes("tenggorok")) {
      result =
        "Diagnosis: Radang tenggorokan. Radang tenggorokan adalah iritasi yang terjadi pada tenggorokan.";
      suggestion =
        "Berikan minuman hangat seperti teh herbal tanpa kafein atau sup hangat untuk menenangkan tenggorokan. Kompres hangat pada leher juga dapat membantu meredakan nyeri. Hindari makanan dan minuman yang terlalu panas, asam, atau pedas karena dapat memperparah rasa sakit.";
    } else if (
      symptoms.includes("kering") &&
      symptoms.includes("gatal") &&
      symptoms.includes("meradang") &&
      symptoms.includes("benjolan")
    ) {
      result =
        "Diagnosis: Eksim. Eksim adalah penyakit kulit kronis yang membuat kulit merah, gatal, dan pecah-pecah.";
      suggestion =
        "Mandi dengan air hangat dan gunakan sabun yang lembut dan bebas pewangi. Setelah mandi, segera keringkan kulit dengan handuk lembut dan oleskan pelembap tebal untuk menjaga kelembapan kulit. Hindari menggaruk area yang gatal karena dapat memperparah kondisi. Kompres dingin juga dapat membantu mengurangi rasa gatal. Kenakan pakaian yang lembut dan terbuat dari bahan alami seperti katun untuk mengurangi iritasi.";
    } else if (
      symptoms.includes("diare") &&
      symptoms.includes("muntah") &&
      symptoms.includes("demam") &&
      symptoms.includes("nyeri")
    ) {
      result =
        "Diagnosis: Infeksi saluran pencernaan. Infeksi saluran pencernaan adalah peradangan pada dinding lambung dan usus";
      suggestion =
        "Berikan banyak cairan seperti oralit atau air kelapa untuk mencegah dehidrasi. Hindari memberikan makanan padat terlebih dahulu, berikan makanan lunak dan mudah dicerna setelah kondisi membaik. Istirahatkan balita dan hindari aktivitas fisik yang berat. Kompres hangat pada perut dapat membantu meredakan nyeri. Jika balita terus-menerus muntah atau diare, atau demamnya tinggi, segera bawa ke dokter.";
    } else if (
      (symptoms.includes("perut kembung") && symptoms.includes("nyeri bab")) ||
      symptoms.includes("darah") ||
      symptoms.includes("mengejan") ||
      symptoms.includes("susah bab")
    ) {
      result =
        "Diagnosis: Konstipasi. Konstipasi adalah kondisi sulit buang air besar, yang bisa berakibat pada tinja yang padat atau keras.";
      suggestion =
        "Berikan banyak cairan seperti air putih atau jus buah yang tidak mengandung serat (seperti apel tanpa kulit) untuk membantu melunakkan tinja. Tambah asupan makanan berserat seperti buah-buahan (pisang, alpukat), sayuran (labu), dan sereal. Pijat perut bayi dengan gerakan melingkar searah jarum jam untuk merangsang pencernaan.";
    } else if (
      symptoms.includes("ruam merah") &&
      symptoms.includes("gatal") &&
      symptoms.includes("bintil") &&
      symptoms.includes("bengkak") &&
      symptoms.includes("kering")
    ) {
      result =
        "Diagnosis: Alergi. Alergi adalah reaksi tidak abnormal dari sistem imun ketika melawan senyawa asing yang sebenarnya tidak berbahaya bagi tubuh.";
      suggestion =
        "Jika balita mengalami alergi, segera hindari pemicunya (misalnya makanan tertentu, debu, atau bulu hewan). Untuk infeksi kulit, jaga kebersihan area yang terinfeksi dengan mencuci menggunakan sabun lembut dan air hangat. Oleskan krim atau salep anti-gatal yang mengandung bahan seperti kalamin untuk meredakan gatal. Jika balita mengalami biang keringat, jaga kulitnya tetap kering dan sejuk, mandi dengan air hangat, dan gunakan pakaian yang lembut dan menyerap keringat.";
    } else if (
      (symptoms.includes("kosong") && symptoms.includes("gerak")) ||
      symptoms.includes("kejang")
    ) {
      result =
        "Diagnosis: Epilepsi. Epilepsi adalah kejang berulang pada sebagian atau seluruh tubuh akibat gangguan pada pola aktivitas listrik di otak.";
      suggestion =
        "Letakkan balita di tempat yang aman dan jauhkan dari benda-benda tajam. Longgarkan pakaiannya, terutama di sekitar leher. Jangan mencoba menahan gerakannya atau memasukkan benda apa pun ke dalam mulutnya. Hitung durasi serangan dan catat gejala yang muncul. Setelah serangan berakhir, posisikan balita miring untuk mencegah tersedak.";
    } else if (
      (symptoms.includes("nyeri telinga") &&
        symptoms.includes("demam") &&
        symptoms.includes("pendengaran")) ||
      symptoms.includes("cairan")
    ) {
      result =
        "Diagnosis: Infeksi telinga tengah. Infeksi telinga tengah alias otitis media merupakan penyakit yang disebabkan oleh infeksi pada telinga bagian tengah.";
      suggestion =
        "Berikan obat pereda nyeri seperti paracetamol atau ibuprofen sesuai dengan anjuran dokter untuk mengurangi rasa sakit. Kompres hangat pada telinga dapat membantu meredakan nyeri dan peradangan. Posisikan kepala balita sedikit lebih tinggi saat tidur untuk mengurangi tekanan pada telinga. Berikan banyak cairan untuk mencegah dehidrasi. Hindari memasukkan benda apapun ke dalam telinga.";
    } else if (
      (symptoms.includes("otot") && symptoms.includes("sakit")) ||
      symptoms.includes("lambat") ||
      symptoms.includes("tidak bertambah") ||
      symptoms.includes("kurus")
    ) {
      result =
        "Diagnosis: Kurang gizi atau gangguan pertumbuhan. Kurang gizi adalah kondisi saat tubuh tidak mendapat asupan nutrisi yang cukup dalam jangka waktu yang lama. Gangguan pertumbuhan adalah kondisi di mana pertumbuhan fisik seorang anak tidak sesuai dengan rata-rata pertumbuhan anak seusianya.";
      suggestion =
        "Berikan ASI eksklusif hingga usia 6 bulan, lalu berikan MPASI yang bergizi dan bervariasi. Pastikan makanan balita mengandung cukup protein, karbohidrat, lemak, vitamin, dan mineral. Ajak balita untuk lebih sering makan dan berikan porsi yang sesuai dengan usianya. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan rekomendasi makanan yang tepat dan jadwal makan yang teratur.";
    } else if (symptoms.length === 0) {
      result = "Tidak ada gejala yang dipilih.";
      suggestion = "";
    } else {
      result = "Tidak ada kecocokan.";
      suggestion =
        "Pastikan memilih gejala yang relevan atau konsultasikan langsung dengan dokter.";
    }

    resultElement.textContent = result;
    suggestionElement.textContent = suggestion;
  });

// Tambahkan elemen untuk saran penanganan di HTML

// ... (bagian JavaScript lainnya)

// Tambahkan objek untuk menyimpan informasi cara penanganan

// Mengosongkan hasil saat tombol reset ditekan
document
  .querySelector('button[type="reset"]')
  .addEventListener("click", function () {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";
    const suggestionElement = document.getElementById("suggestion");
    suggestionElement.textContent = ""; // Kosongkan hasil

    // Aktifkan kembali semua checkbox
    const checkboxes = document.querySelectorAll('input[name="symptoms"]');
    checkboxes.forEach((cb) => (cb.disabled = false));
  });

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[name="symptoms"]');

  // JavaScript untuk menangani form dan validasi
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const signupLink = document.getElementById("signup-link");

  signupLink.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  // Tambahkan event listener untuk form submit dan lakukan validasi serta proses login/signup di sini

  // Contoh sederhana untuk mengalihkan ke index.html setelah login berhasil
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Simulasikan proses login
    console.log("Login berhasil!");
    window.location.href = "index.html";
  });

  // Tambahkan event listener untuk form signup dan lakukan validasi serta proses pembuatan akun di sini

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const checkedSymptoms = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value);

      if (checkedSymptoms.length === 0) {
        // Aktifkan semua checkbox jika tidak ada yang dipilih
        checkboxes.forEach((cb) => (cb.disabled = false));
      } else {
        // Disable checkbox yang tidak relevan
        checkboxes.forEach((cb) => {
          const relatedSymptoms = checkedSymptoms.flatMap(
            (symptom) => symptomRelations[symptom]
          );
          if (
            !relatedSymptoms.includes(cb.value) &&
            !checkedSymptoms.includes(cb.value)
          ) {
            cb.disabled = true;
          } else {
            cb.disabled = false;
          }
        });
      }
    });
  });
});
