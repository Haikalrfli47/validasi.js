function klik() {
  document.getElementById('info').innerHTML = 'silahkan isi form di bawah ini';
}

function validate() {
  event.preventDefault();
  var huruf = /^[A-Za-z]+$/;
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputNama = document.forms['form_daftar']['nama'].value;
  var inputEmail = document.forms['form_daftar']['email'].value;
  var inputAlamat = document.forms['form_daftar']['alamat'].value;
  var inputNomor = document.forms['form_daftar']['nomorHp'].value;
  if (inputNama.match(huruf)) {
    var namaValid = inputNama;
  } else {
    alert('Input nama tidak cocok');
  }
  if (inputEmail.match(mailFormat)) {
    var emailValid = inputEmail;
  } else {
    alert('Input email tidak cocok');
  }
  if (inputAlamat == '') {
    alert('Input alamat tidak cocok');
  } else {
    var alamatValid = inputAlamat;
  }
  if (isNaN(inputNomor) || inputNomor.toString().length < 10) {
    alert('Input Nomor tidak cocok');
  } else {
    var nomorValid = inputNomor;
  }
  document.getElementById('hasil').innerHTML = namaValid + '<br>' + emailValid + '<br>' + alamatValid + '<br>' + nomorValid;
  document.getElementById('tombol2').textContent = 'Registered!';
}
