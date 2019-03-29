<template>
    <div>
        <h1>c1同级组件之间的传递</h1>
        <button @click="c1Btn">c1Btn</button>
    </div>
</template>

<script>
    import bus from '../assets/eventBus'
    export default {
        name: "C1",
        data:function(){
            return{
                message:'hi Phoenix'
            }
        },
        methods:{
            c1Btn(){
                console.log(this.message);
                bus.$emit('sendChange',this.message)
            },
        },
    }
</script>

<style scoped>

</style>