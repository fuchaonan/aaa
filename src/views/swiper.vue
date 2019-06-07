<template>
    <div>
     <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in list">
                    <img :src="item.thumb" />
                </div>
         </div>
         <div class="swiper-pagination"></div>
     </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import "swiper/dist/css/swiper.css";
    export default {
    data(){
        return {
            list:[]
        }
    },
        created(){
        this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?callback&_=1559618231429`).then((res)=>{
            this.list=res.data.filter((item,index)=>index<5);//筛选数组前五条信息
        })
        },
        mounted(){

        },
        watch:{//异步的数据写在watch里面，监听list变化，mounted里写死数据
            list(){
                this.$nextTick(()=>{
                    var mySwiper =new Swiper ('.swiper-container',{
                        loop:true,//循环模式选项,自动轮播
                        autoplay:{
                            delay:3000,
                            disableOnInteraction:false//鼠标滑上再离开
                        },
                        pagination:{//
                            el:'.swiper-pagination'
                        }
                    })
                })
            }
        }
    }
</script>
<style lang="scss">
    .swiper-container{
        height:3.6rem;
        margin-top:1.2rem;
    }
</style>
