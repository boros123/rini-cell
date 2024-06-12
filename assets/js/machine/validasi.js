$(document).ready(function(){
  $('#form').on('submit', function(e){
    e.preventDefault(); 
  
    var name = $('#name').val();
    var phone = $('#handphone').val();
    var jasa = $('#jasa').val();
    var alamat = $('#alamat').val();
    
    var currentTime = new Date();
    var realtime = currentTime.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    var message = 
                  "Halo Mimin Saya order nih,mohon segera di follow up ya mimin!" + "%0A" +
                  "Nama Pembeli: " + name + "%0A" +
                  "Telepon: " + phone + "%0A" +
                  "Order Tanggal: " + realtime + "%0A" +  
                  "Jenis layanan: " + jasa + "%0A" +
                  "Alamat: " + alamat;

  //  ganti no hp
    var whatsappURL = "https://api.whatsapp.com/send?phone=6289510278432&text=" + message;
    window.open(whatsappURL, '_blank');
  });
});