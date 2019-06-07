<template>
    <div class="about">
        <div class="boxnav">
            <div class="mynav">
                <!--轮播图-->
                <div class="swiper-container2">
                    <div class="swiper-wrapper">
                        <!--当前的项目添加样式-->
                        <div class="swiper-slide w" v-for="(item,index) in titles" :class="{'active':index===curIndex}">
                            {{item.text}}
                        </div>
                    </div>
                </div>
            </div>
            <span>三</span>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import "swiper/dist/css/swiper.css";
    export default{
        data(){
            return {
                curIndex:0,
                titles:[{
                    id:1,
                    text:'头条',
                    type:'pcent'
                },{
                    id:2,
                    text:'娱乐',
                    type:'pctech'
                },{
                    id:3,
                    text:'科技',
                    type:'pcspt'
                },{
                    id:4,
                    text:'体育',
                    type:'pcent'
                },{
                    id:5,
                    text:'财经',
                    type:'pcent'
                },{
                    id:6,
                    text:'军事',
                    type:'pcent'
                },{
                    id:7,
                    text:'音乐',
                    type:'pcent'
                },{
                    id:8,
                    text:'热点',
                    type:'pcent'
                },{
                    id:9,
                    text:'视频',
                    type:'pcent'
                },{
                    id:10,
                    text:'奇趣',
                    type:'pcent'
                },{
                    id:11,
                    text:'图片',
                    type:'pcent'
                },{
                    id:12,
                    text:'财经',
                    type:'pcent'
                }]
            }
        },
        mounted(){//需要先实例化
            var vm=this;//如果不写这个this就是指的mySwiper这个实例，先把this存到vm里
            var mySwiper=new Swiper('.swiper-container2',{
                freeMode:true,//设为自由模式
                slidesPerView:'auto',//每一项设置为auto
                on:{//监听事件的命令
                    click(){
                        this.setTransition(300);//设置过渡的时间
                        vm.curIndex=this.clickedIndex;//clickedIndex是自带的
                        var el=this.slides[vm.curIndex];//slides为上面多个(幻灯片）div的集合
                         //  console.log(this.slides);//this.slides为dom对象，里面是多个div的合集
                         var elPos=el.offsetLeft+el.clientWidth/2;//当前幻灯片的中心位置，左边的距离加上宽度的一半
                        //clientWidth是当前元素的宽度,offset为当前元素距离父元素的最左边的距离
                        var wrpperWidth=el.parentNode.clientWidth;//当前点击的元素的父元素的宽度
                        var maxDis=this.maxTranslate();//最大的滚动距离，超出客户宽度的那段距离
                        //console.log(maxDis);//为负值
                        var maxPos=-maxDis+wrpperWidth/2;//最大的元素位置
                        if(elPos<wrpperWidth/2){// 如果当前元素的位置小于容器宽度的一半，点击时位置不变，否则会留白
                            this.setTranslate(0);//此时设置setTranslate为0，元素位置不动
                        }
                        else if(elPos>-maxDis){//如果元素大于最大的滚动距离，就滚动到最大的滚动距离
                            this.setTranslate(maxDis);//相当于滚动距离不变
                        }
                        else{
                            this.setTranslate(wrpperWidth/2-elPos);//否则就滚动到中间位置，容器宽度一半减去当前元素的位置
                        }
                        if(vm.curIndex===0){
                            vm.$router.push("/home/firstPage/news")//编程式导航
                        }
                        else{
                            vm.$router.push('/home/firstPage/'+vm.titles[vm.curIndex].type)
                        }
                    }
                }
            })
        }
    }
</script>
<style>
    .boxnav{
        display:flex;
    }
    .mynav{
        width:7rem;
        overflow:hidden;
    }
    .w{
        width:1.5rem;
        text-align:center;
    }
    .active{
        color:#ff9700;
        border-bottom:1px solid #ff9700
    }
</style>