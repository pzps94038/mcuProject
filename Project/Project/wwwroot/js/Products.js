$(document).ready(function () {
    // 條件隱藏
    $(window).scroll(function (event) {
        if ($("html").scrollTop() > 300) {
          $('.top').fadeIn(300);
        } else {
          $('.top').fadeOut(300);
        }
      });
    // 滾動到最上面
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },1000)
    });
});
// vue
const App = {
    // 資料
    data() {
        return {
            productsData: [],
            productsSort: [],
            carts: [],
            search: '',
        };
    },
    // 函式置放
    methods: {
        // 使用axios抓到資料
        getData() {
            const apiUrl = "http://localhost:54515/api/GetProducts";
            axios.get(apiUrl)
                .then((res) => {
                    this.productsData = res.data;
                    this.productsSort = res.data;
                    this.getUrl();
                })
                .catch((err) => {
                    console.log(err, '取得資料發生錯誤');
                })
        },
        getUrl() {
            let url = location.href.split('/');
            url = url[5];
            let data = this.productsData.filter((item) => {
                if (url == item.productType) {
                    return item;
                }
            });
            this.productsSort = data;
        },
        // 抓到購物車資料
        getCarts() {
            this.carts = JSON.parse(localStorage.getItem("cart")) || [];
        },
        // 加入購物車
        addcart(i) {
            this.productsData.forEach((item) => {
                // 抓商品data如果id == 傳進來參數的id就加進購物車
                if (item.productId == i) {
                    let todo = {
                        id: item.productId,
                        Name: item.productName,
                        Price: item.productPrice,
                        Img: item.productImg,
                        Amount: 1
                    };     
                    //    如果購物車是空的直接加進去
                    if(this.carts.length == 0){
                        this.carts.push(todo)
                    }
                    // 不是空的就把cats裡面的東西撈一遍
                    else{
                        // 用a判斷true false
                        // b判斷位置                        
                        let a = 0;
                        let b = 0;
                        this.carts.forEach((x,key) => {                                          
                        if(x.id == item.productId){
                            a+=1;
                            b = key;                                                   
                        }                     
                    })
                    // 如果a = 0就等於沒找到相同ID的商品就能把todo直接加入購物車
                        if(a == 0){
                            this.carts.push(todo);
                    // 如果a不等於0就把當前購物車的數量+上1
                        }else{
                            this.carts[b].Amount+=1;
                        };
                    ;
                    }
                }                
                $(".alert_cart_show").finish().fadeIn().delay(2000).fadeOut(1000);
                localStorage.setItem("cart", JSON.stringify(this.carts));
            });
        },
        // 顯示分類結果用
        viewSort(e) {
            if (e == 'All') {
                let data = this.productsData;
                this.productsSort = data;
            }
            else {
                let data = this.productsData.filter((item) => {
                    if (e == item.productType) {
                        return item;
                    }
                });
                this.productsSort = data
            }
        }
    },
    //計算用
    computed: {
        cartstotal: {
            get() {
                let total = 0;
                this.carts.forEach((e) => {
                    let y = parseInt(e.Amount);
                    total += y;
                })
                return total || 0;
            }
        },
        filterProducts() {
            return this.productsSort.filter((item) => {
                return item.productName.match(this.search);
            })
        }
    },
    //生命週期
    // 呼叫取得資料的函式
    created() {
        this.getData();
        this.getCarts();
    },
};
Vue.createApp(App).mount('#app');