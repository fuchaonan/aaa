<template>
    <div>
        <div class="pos">
       <MyHeader />
        <MyNav />
        </div>
        <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
            <!--只有当这个值为true时才进行缓存，即只有new组件进行缓存-->
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
    </div>
</template>
<script>
    import MyHeader from './MyHeader'
    import MyNav from './mynav'
    export default{
        components:{
            MyHeader,MyNav
        }
    }
</script>
<style>
    .pos{
        position:fixed;
        top:0;
        left:0;
        right:0;
        background:white;
        z-index:111
    }
</style>