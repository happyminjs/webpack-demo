<template>
    <button @click="handleclick" :style="styles">
        <slot></slot>
    </button>
</template>
<style scoped>
    button{
        border:0;
        outline: none;
        color: #fff;
        padding: 4px 8px;
    }
    button:active{
        position: relative;
        top: 5px;
        left: 5px;
    }
</style>
<script>
    export default{
        props:{
            color:{
                type:String,
                default:'#00cc66'
            }
        },
        computed:{
            styles () {
                return {
                    background:this.color
                }
            }
        },
        methods:{
            handleclick(e){
                this.$emit('click',e);
            }
        }
    }
</script>
