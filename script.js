let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let kesempatan = 5;

document.getElementById("tebak").addEventListener("click", function () {
  let angkaTebak = parseInt(document.getElementById("angka").value);

  if (angkaTebak === angkaRahasia) {
    document.getElementById("hasil").innerHTML = "Selamat! Anda menang!";
    document.getElementById("tebak").disabled = true;
  } else {
    kesempatan--;
    document.getElementById("hasil").innerHTML =
      "Salah! Kesempatan tersisa: " + kesempatan;

    if (kesempatan === 0) {
      document.getElementById("hasil").innerHTML =
        "Game Over! Angka rahasia: " + angkaRahasia;
      document.getElementById("tebak").disabled = true;
    }
  }
});
