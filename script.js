let status = document.getElementById("status");
let nyawa = document.querySelectorAll("div.nyawa span");
let angka = document.getElementById("angka");
let button = document.querySelectorAll("button");
let input = document.getElementById("inputangka");
let inputBox = document.querySelector("div.input");
let tebakBox = document.querySelector("div.tebakbox");
let gen;
let sisanyawa = 5;
button[1].style.display = "none";
button[2].style.display = "none";
function reset() {
  window.location.reload();
}
const acak = () => {
  return (gen = Math.floor(Math.random() * 20) + 1);
};
const tebak = () => {
  const isi = input.value;
  tampilHasil(isi, gen);
  tampilNyawa();
};
const start = () => {
  inputBox.classList.toggle("show");
  tebakBox.classList.toggle("show");
  status.classList.toggle("show");

  button[0].style.display = "none";
  button[1].style.display = "block";
  button[2].style.display = "none";
  acak();
};
const getAcak = () => {
  return gen;
};

const tampilNyawa = () => {
  switch (sisanyawa) {
    case 5:
      nyawa.forEach((n) => (n.style.display = "inline-block"));
      break;
    case 4:
      nyawa[4].style.display = "none";
      break;
    case 3:
      nyawa[3].style.display = "none";
      nyawa[4].style.display = "none";
      break;
    case 2:
      nyawa[2].style.display = "none";
      nyawa[3].style.display = "none";
      nyawa[4].style.display = "none";
      break;
    case 1:
      nyawa[1].style.display = "none";
      nyawa[2].style.display = "none";
      nyawa[3].style.display = "none";
      nyawa[4].style.display = "none";
      break;
    default:
      nyawa.forEach((n) => (n.style.display = "none"));
      status.style.display = "none";
      if (hasil.classList.contains("salah")) {
        hasil.classList.remove("salah");
        hasil.classList.add("gameover");
      } else {
        hasil.classList.add("gameover");
      }
      hasil.innerText = "GAME OVER!!";
      button[1].style.display = "none";
      button[2].style.display = "block";
      break;
  }
};
const tampilHasil = (tebakan, soal) => {
  let hasil = document.getElementById("hasil");
  if (tebakan == soal) {
    angka.innerHTML = soal;
    angka.style.opacity = "1";
    hasil.innerHTML = "TEBAKAN ANDA BENAR";
    if (hasil.classList.contains("salah")) {
      hasil.classList.remove("salah");
      hasil.classList.add("sukses");
    } else {
      hasil.classList.add("sukses");
    }
    button[1].style.display = "none";
    button[2].style.display = "block";
  }
  if (tebakan < soal) {
    hasil.innerHTML = "COBA LEBIH TINGGI";
    hasil.classList.add("salah");
    sisanyawa -= 1;
  }
  if (tebakan > soal) {
    hasil.innerHTML = "COBA LEBIH RENDAH";
    hasil.classList.add("salah");
    sisanyawa -= 1;
  }
};
tampilNyawa();

// / if (input == gen) {
//   angka.innerHTML = gen;
//   hasil.innerHTML = "TEBAKAN ANDA BENAR";
//   if (hasil.classList.contains("salah")) {
//     hasil.classList.remove("salah");
//     hasil.classList.add("sukses");
//   } else {
//     hasil.classList.add("sukses");
//   }
//   buttonTebak.style.display = "none";
//   buttonReset.style.display = "block";
// }
// if (input < gen) {
//   hasil.innerHTML = "COBA LEBIH TINGGI";
//   hasil.classList.add("salah");
//   sisanyawa -= 1;
// }
// if (input > gen) {
//   hasil.innerHTML = "COBA LEBIH RENDAH";
//   hasil.classList.add("salah");
//   sisanyawa -= 1;
// }
