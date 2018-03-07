<template>
    <h1>
        <a href="'#' + title">{{title}}</a>
    </h1>
</template>
<style>
    h1 a{
        color: #3399ff;
        font-size: 28px;
    }
</style>
<script>
//    import HeaderComponent from './components/header.vue'
//    import OtherComponent from './components/other.vue'
    export default{
        props:{
            title:{
                type:String
            }
        }
    }
</script>
