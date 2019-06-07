<template>
    <div class="about">
        <ul>
            <li v-for="item in news">
                <img :src="item.thumb" width="100" />
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
       data(){
           return{
               news:[]
           }
       },
        watch:{//通过参数传进来的值，所以要用watch监控参数变化
            $route:{
                handler(n){
                    var type=n.params.type;//n this.$route
                    this.getData(type);
                },
                deep:true,
                immediate:true
            }
        },
        methods:{
           getData(type){
               this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?callback&cateid=1&cre=tianyi&mod=${type}&merge=3&statics=1&length=20&up=1&down=0&fields=media`,{
                   _:Date.now()
               }).then((res)=>{
                   this.news=res.data;
               })
           }
        }
    }
</script>