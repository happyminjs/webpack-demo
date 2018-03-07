<template>
    <div>
        <div class="say_hi">Hi，{{msg}}</div>
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleclick">点击按钮</v-button>
        <img src="/img/220_220.jpg" style="width: 200px;" alt="">
    </div>
</template>
<style scoped>
    div{
        color:#f60;
        font-size:28px;
    }
    .say_hi{
        background: blue;
    }
</style>
<script>
    import vTitle from './title.vue';
    import vButton from './button.vue';
    export default{
        data(){
            return{
                msg:'hello vue，哼'
            }
        },
        components:{
            vTitle,
            vButton
        },
        methods:{
            handleclick (e){
                console.log(e);
            }
        }
    }
</script>
