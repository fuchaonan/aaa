<template>
    <div class="about">
        <swiper />
        <!--引入无限滚动后写这些，loadMore为加载数据的方法，滚动条滚动到10的时候触发loadmore方法-->
       <ul class="newsarea"
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10"
       >
           <li v-for="(item,index) in news" class="news">
               <div>
             <h4> {{item.title}}</h4>
                   <p class="newstime">
                       <span>{{item.source}}</span>
                       <span>{{item.ptime}}</span>
                   </p>
               </div>
               <img :src="item.pic[0]"/>
               <span @click="remove(index)"><i class="fa fa-close"></i></span>
           </li>
       </ul>
    </div>
</template>
<script>
    import swiper from './swiper'
    import {InfiniteScroll,Indicator,Toast} from 'mint-ui';//将无限滚动组件和加载从mint-ui官网引入进来
    export default{
        components:{
            swiper
        },
        data(){
          return{
              news:[],
              loading:false,
              page:1,//page的值默认是1
          }
        },
        created(){
            // this.$jsonp("http://temp.163.com/special/00804KV1/post1603_api_all.js",{
            // 	_:Date.now(),
            // 	callbackName:"callback"
            // }).then((res)=>{
            // 	this.news = res.data.filter((item,index)=>index<10);
            // })
            // this.getData();
            this.$jsonp("https://shop2.we10.cn/addons/zjhj_mall/core/web/index.php?",{
                _:Date.now(),//时间戳
                callbackName:"callback"
            }).then((res)=>{
//                this.news=res.data.filter((item,index)=>index<10);//取前十条数据
                console.log(res);
            })
        },
        methods:{
            getData(){
              if(this.page>3){//page>3时不再请求新数据
                  Toast({//数据加载完的提示框用Toast做
                      message:'数据加载完',
                      position:'middle',
                      duration:1500
                  });
                  return
              }
              Indicator.open('加载中...');//发请求时显示indicator这个圈提示正在加载中，将loading设置为true,此时不能再发请求
              this.loading=true;//loading值为false表示没有请求，可以发送请求，为true表示正在请求
              this.$axios.get("http://localhost:3000/data",{
                  //会有跨域问题，需要设代理
                  params:{//设置分页参数
                      _page:this.page,
                      _limit:5
                  }
              }).then((res)=>{
                  setTimeout(()=>{
                      this.news=this.news.concat(res.data);//把新请求到的数据和原来的数据放在一起
                      this.loading=false;
                      Indicator.close();//indicator就是加载中，经过1.5s关闭这个圈圈
                  },1500);
              })
            },
            loadMore(){
              this.page++;//加载数据，page+1后再获取data
              this.getData();
            },
            remove(index){
                this.news.splice(index,1);
            }
        }
    }
</script>
<style scoped lang="scss">
 .news{
     &:nth-of-type(1){
      margin-top:0;
   };
     display:flex;
     margin:0.2rem;
     border-bottom:1px solid #ccc;
     img{
         margin-bottom:0.2rem;
     }
 }
    .newsarea{
        background:#eee;

    }
    h4{
        margin:0;
        font-weight:normal;
    }
    .newstime{
        display:flex;
        justify-content:space-between;
        margin-top:0.6rem;
        span:nth-of-type(2){
            padding-right:0.6rem;
        }
        .fa-close{
            border:1px solid #404040;
            border-radius:50%;
        }
    }
</style>