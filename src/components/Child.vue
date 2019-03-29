<template>
    <div>
        <h2>父组件向子组件传递的数据{{msg}}</h2>
        <h2>单项数据流两中方法{{newMsg}}</h2>
        <h2>
            子组件向父组件传递数据
            <input type="text" v-model="inputValue" @input="childToParent">
        </h2>

    </div>
</template>

<script>
    export default {
        name: "Child",
        props:['msg'],
        data:function(){
            return{
                inputValue:''
            }
        },
        //方法一：
        // data:function(){
        //     return {
        //         newMsg:null,
        //     }
        // },
        // created(){
        //     this.newMsg=this.msg+'hahha';
        // },
        //方法二：
        computed:{
            newMsg(){
                return this.msg+"hello";
            }
        },
        methods:{
            childToParent(){
                this.$emit('changeParent',this.inputValue)
            },
        },

    }
</script>

<style scoped>

</style>