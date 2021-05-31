const App = {
    // 資料
    data() {
        return {
            carts:[],            
            productsData:[],
            productAmount:1,
            url: '',
            cartAmount:0,
        };
    },
    // 函式置放
    methods: {
        // 使用axios抓到資料
        getData() {
            let dataId = location.href.split('/')[5].split('=')[1];
            const apiUrl = `http://localhost:54515/api/GetProductByid?id=${dataId}`;
            this.url = apiUrl;
            axios.get(apiUrl)
                .then((res) => {
                    this.productsData = res.data;                    
                })
                .catch((err) => {
                    console.log(err, '取得資料發生錯誤');
                })         
        },
        getCarts(){            
            this.carts = JSON.parse(localStorage.getItem('cart')) || [];
                     
        },
        getCartAmount() {
            let total = 0;
            this.cartAmount = this.carts.forEach((e) => {
                let Amount = parseInt(e.Amount);
                total += Amount;
            });
            this.cartAmount = total;   
        },
        add(){
            this.productAmount += 1;
            this.getCartAmount();
        },
        less(){
            if(this.productAmount == 1){return}
            else{
                this.productAmount -= 1;
                this.getCartAmount();
            }
        },
        addCart(){           
            if(this.productAmount <1){return}
            else{           
                let todo = {
                    id: this.productsData.productId,
                    Name: this.productsData.productName,
                    Price: this.productsData.productPrice,
                    Img: this.productsData.productImg,
                    Amount: this.productAmount
                }
                if(this.carts.length == 0){
                    this.carts.push(todo)
                }
                else{
                    // 用a判斷true false
                    // b判斷位置                        
                    let a = 0;
                    let b = 0;
                    this.carts.forEach((x,key) => {                                           
                        if(x.id == this.productsData.productId){
                        a += 1;
                        b = key;                                                   
                        }                     
                    })
                    // 如果a = 0就等於沒找到相同ID的商品就能把todo直接加入購物車
                        if(a == 0){
                            this.carts.push(todo);
                    // 如果a不等於0就把當前購物車的數量+上1
                        } else {
                            this.carts[b].Amount = parseInt(this.carts[b].Amount);
                            this.carts[b].Amount+= parseInt(this.productAmount);
                        };
                    ;
                }                            
                alert(`${this.productsData.productName}已加入購物車`);
                // $('.alert_cart_show').finish().fadeIn().delay(2000).fadeOut(1000);                
                localStorage.setItem("cart", JSON.stringify(this.carts));
                this.getCartAmount();
            }
        }         
    },
    //計算用
    computed: {        
    },
    //生命週期
    // 呼叫取得資料的函式
    created() {
        this.getData();
        this.getCarts();
        this.getCartAmount();
    },
};
Vue.createApp(App).mount('#app');