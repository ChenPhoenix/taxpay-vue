<template>
    <div>
        <h1>C2同级组件之间的传递</h1>
        <h2>{{c2Message}}</h2>
    </div>
</template>

<script>
    import bus from '../assets/eventBus'
    export default {
        name: "C2",
        data:function () {
            return{
                c2Message:'',
            }
        },
        created(){
            bus.$on('sendChange',(data)=>{
                this.c2Message = data;
                console.log(data);
            })
        },
    }
</script>

<style scoped>

</style>