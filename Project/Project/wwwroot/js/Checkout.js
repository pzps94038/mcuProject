// vue
const App = {
    // 資料
    data(){
        return{
            carts:[],                              
        };
    },
    // 方法
    methods:{
        // 抓購物車
        getCarts(){
            this.carts = JSON.parse(localStorage.getItem("cart"));                                        
        },
        // 移除購物車
        removeCart(i){
            this.carts.splice(i,1);        
            localStorage.setItem("cart",JSON.stringify(this.carts));            
        },
        // 確認購物車資料
        changeAmount(key){
            this.carts[key].Amount = parseInt(this.carts[key].Amount);
            localStorage.setItem("cart",JSON.stringify(this.carts));
        },
        add(key){
            this.carts[key].Amount = parseInt(this.carts[key].Amount)+1;
            localStorage.setItem("cart",JSON.stringify(this.carts));
        },
        less(key){
            if(this.carts[key].Amount <= 1){return}
            this.carts[key].Amount = parseInt(this.carts[key].Amount)-1;
            localStorage.setItem("cart",JSON.stringify(this.carts));
        },       
    },  
    // 計算and搜尋用
    computed:{
        cartsAmount:{
            get(){
                let total = 0;
                this.cartAmount = this.carts.forEach((e) => {
                    let Amount = parseInt(e.Amount);
                    total += Amount;
                });                
                return total;
            }      
        },
        total:{
            get(){                
                let cost = 0;
                let totalCost = this.carts.forEach( e => {                   
                    cost+=e.Price*e.Amount;                    
                });
                return cost || 0;
            }  
        },
        cartsLen:{
            get(){
                let i = this.carts.length;
                let y = false;
                if(i != 0){
                    y = true;
                }
                return y
            }
        }
    },
    // 生命週期
    created(){
        this.getCarts();
    }
}
Vue.createApp(App).mount('#app');