<template>
    <div class="about">
        <MyHeader />
        <MyNav />
        <h1>订阅</h1>
        <mt-swipe :show-indicators="false">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
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