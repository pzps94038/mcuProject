// vue
const id = document.getElementById('userId').value;
const Email = document.getElementById('userEmail').value;
const App = {
    // 資料
    data() {
        return {
            carts: [],
            userid: '',
            userEmail:'',
            userData:[],
            address:'',
            PaymentMethod:'',
            PickUpAtTheStoreDate: '',           
            username:'',
            phone:'',
            productNamelist:[],
            productAmount:[],
            productId:[],
        };
    },
    // 方法
    methods: {
        //抓會員資料
        getData(){     
            const apiUrl = `http://localhost:54515/api/AspNetUser/api/GetAspNetUserByid?id=${this.userid}`;
            axios.get(apiUrl)
            .then((res) => {        
              this.userData = res.data;
              this.username = this.userData.name;
            })
            .catch((err)=>{
              console.log(err,'取得資料發生錯誤');
            })
        },        
        // 抓到當前登入會員id
        getUserId(){
            this.userid = id;
            this.userEmail = Email;
            this.getData();
        },
        getCarts(){
            this.carts = JSON.parse(localStorage.getItem("cart")) || [];
        },
        // 結帳
        Complete(){
            if (this.username.length == 0 || this.address.length == 0 || this.PaymentMethod == ''){return}            
            else{
               
                 this.carts.forEach((item)=>{                
                    this.productNamelist.push(item.Name);
                    this.productAmount.push(item.Amount);               
                    this.productId.push(item.id);
                }) 
            // this.address = $("[name='city']").val() + $("[name='town']").val();              
                // console.log()
                this.sendEmail();
                this.productNamelist = this.productNamelist.join('&');
                this.productAmount = this.productAmount.join('&');
                this.productId = this.productId.join('&');
                let today = new Date();
                if(this.PaymentMethod == "CashOnDelivery"){
                    this.PaymentMethod = "貨到付款";
                }else if(this.PaymentMethod == "CreditCardTransfer"){
                    this.PaymentMethod = "信用卡轉帳";
                }else if(this.PaymentMethod == "PickUpAtTheStore"){
                    this.PaymentMethod = "來店預定";                   
                }
                axios.post('http://localhost:54515/api/AddOrderDetail', 
                {                
                    'MemberID': this.userid,
                    'MemberName':this.username,
                    'ProductName':this.productNamelist,
                    'Phone':this.phone,                
                    'ProductID':this.productId,
                    'OrderDate':`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
                    'Quantity':this.productAmount,
                    'Address': this.address,    
                    'PaymentMethod': this.PaymentMethod,
                    'PickUpAtTheStoreDate':this.PickUpAtTheStoreDate,
                    'TotalPrice':this.total,                             
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });                
                this.carts = [];
                localStorage.setItem("cart",JSON.stringify(this.carts));
            }            
        },
        sendEmail() {
            let today = new Date();
            let tempParams = {
                user_email: this.userEmail,
                MemberName:this.username,
                OrderDate : `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
                TotalPrice:this.total,
                link:"<a href='http://localhost:54515/Checkout/OrderDetails' target='_blank'>查看訂單</a>",
            }
            emailjs.send("service_fhxjpeq", "template_kcuespt",tempParams)
            .then((res) => {
                console.log("success", res.status);                
            })
        }
    },
    // 計算and搜尋用
    computed: {    
        total:{
            get(){
                let totalCost = 0;
                this.carts.forEach((item)=>{
                    totalCost+=item.Price*item.Amount;
                })
                return totalCost;
                ;
            },
        }   
    },
    // 生命週期
    created() {        
        this.getUserId();
        this.getCarts();
    }
}
Vue.createApp(App).mount('#app');