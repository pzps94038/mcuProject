// vue
const id = document.getElementById('userId').value;
const App = {
    // 資料
    data() {
        return {
            userid:'',
            page:1,
            maxapage:1,
            OrderDetailsData:[],
            userDetailsData:[],
            showDetailsData:[],
            testlist:[],                                  
        };
    },
    // 函式置放
    methods: {
        // 使用axios抓到資料
        getData() {
            const apiUrl = "http://localhost:54515/api/GetOrderDetails";
            axios.get(apiUrl)
                .then((res) => {
                    this.OrderDetailsData = res.data;
                    this.getUserDetailsData();          
                })
                .catch((err) => {
                    console.log(err, '取得資料發生錯誤');
                })
        },
        getUserId(){            
            this.userid = id; 
            this.getData();           
        },
        getUserDetailsData(){
            this.OrderDetailsData.forEach(element => {                
                if(element.memberId == this.userid){                   
                    this.userDetailsData.push(element);
                }
            });
            this.dissplayDetail();          
        },
        dissplayDetail(){
            // 預設顯示6筆            
            let showData = 6;
            
            let minData = (this.page * showData) - showData + 1 ;
            let maxData = (this.page * showData) ;
            this.maxapage = Math.ceil(this.userDetailsData.length / showData);
            let data = []; 
            this.userDetailsData.forEach((item,index)=>{
                const num = index + 1;
                if ( num >= minData && num <= maxData) {
                    data.push(item);
                }
            })
            this.showDetailsData = data;
        },
        dissplayDetailADD(){            
            if(this.page >= this.maxapage){return}
            this.page = this.page +1;
            this.dissplayDetail();
        },
        dissplayDetailLess(){
            if(this.page <=1){return}
            this.page = this.page -1;
            this.dissplayDetail();
        }       
    },
    //計算用
    computed: {              
    },
    //生命週期
    // 呼叫取得資料的函式
    created() {
       this.getUserId();
    },
};
Vue.createApp(App).mount('#app');