<template>
    <div>
        <h1>parent</h1>
        <h2> {{childToParentMsg}}</h2>
        <child :msg="parentToChild" @changeParent="getchild"></child>
        <h1>同级组件之间的传递数据</h1>
        <C1></C1>
        <C2></C2>
    </div>
</template>

<script>
    import child from './Child';
    import C1 from './C1';
    import C2 from './C2';
    export default {
        name: "Parent",
        components:{child,C1,C2},
        data:function () {
            return {
                parentToChild:'parentToChild',
                childToParentMsg:''
            }
        },
        methods:{
            getchild(data){
                this.childToParentMsg = data;
            },
        }
    }
</script>
<style scoped>

</style>