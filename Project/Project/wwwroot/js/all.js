// email
const sendemail = document.getElementById('sendemail');
sendemail.addEventListener('click', SendEmail);
function SendEmail(params) {   
    let tempParams = {
        from_name: document.getElementById('from_name').value,
        from_phone: document.getElementById('from_phone').value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value
    };
    emailjs.send('service_fhxjpeq', 'template_yjmu58f', tempParams)
        .then((res) => {
            console.log("success", res.status);
            alert('郵件送出成功')
        })
};

// map
var map = L.map('map', {
    // 設定經緯
    center: [24.98617,121.34361],
    // 設定縮放
    zoom: 20
});
// 更改icon
var blackIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png ',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
// 使用openstreetmapAPI
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// 加入圖標改icon及點擊顯示內容
L.marker([24.98617, 121.34361], { icon: blackIcon }).addTo(map).bindPopup('<a href="https://www.google.com/maps/dir/%E9%8A%98%E5%82%B3%E5%A4%A7%E5%AD%B8-%E6%A1%83%E5%9C%92%E9%BE%9C%E5%B1%B1%E6%A0%A1%E5%8D%80+333%E6%A1%83%E5%9C%92%E5%B8%82%E9%BE%9C%E5%B1%B1%E5%8D%80%E5%BE%B7%E6%98%8E%E8%B7%AF5%E8%99%9F//@24.9844011,121.3427525,18.25z/data=!4m8!4m7!1m5!1m1!1s0x34681e8f88001f51:0xde8e62ebe5442d75!2m2!1d121.3423518!2d24.9844808!1m0" style="text-decoration:none;font-size:15px;color:brown" target="_blank">CatBakery</a>');