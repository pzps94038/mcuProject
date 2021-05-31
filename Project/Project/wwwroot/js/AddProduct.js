const xhr = new XMLHttpRequest;
const url = "http://localhost:54515/api/AddProduct";
const addProductBtn = document.getElementById('addProduct');
const productImg = document.getElementById('productImg');
const productImgShow = document.getElementById('productImgShow');
addProductBtn.addEventListener('click',addProduct);
productImg.addEventListener('blur',Show);
function Show(){  
    productImgShow.innerHTML = `<img src="${productImg.value}">`;
}
function addProduct(){
    // 設定回傳開啟方式
    xhr.open("POST", url)
    let productType = document.getElementById('productType').value;
    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;
    let productData = document.getElementById('productData').value;      
    let todo={
        "productType":productType,
        "productName":productName,
        "productImg":productImg.value,
        "productPrice":parseInt(productPrice),
        "productData":productData,
    }
    // 設定回傳格式並轉成json字串
    xhr.setRequestHeader('Content-type','application/json');
    todo = JSON.stringify(todo);    
    xhr.send(todo);
    $('.alert_show').finish().fadeIn().delay(1000).fadeOut(2000);;    
}