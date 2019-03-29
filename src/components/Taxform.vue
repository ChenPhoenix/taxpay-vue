<template>
    <div class="tax-form-box">
        <header class="tax-header">
            <span class="header-title">个人税收信息</span>
        </header>
        <section class="sec-box">
            <div class="sec-flex">
                <span class="sec-title">姓名</span>
                <input v-model="name" placeholder="请输入姓名">
            </div>
            <div class="sec-flex">
                <span class="sec-title">身份证件类型</span>
                <select v-model="cardType" class="sec-select">
                    <option disabled value="">请选择身份证件类型</option>
                    <option>身份证</option>
                    <option>港澳台通行证</option>
                    <option>外国护照</option>
                </select>
            </div>
            <div class="sec-flex">
                <span class="sec-title">证件号码</span>
                <input v-model="cardNum" placeholder="请输入证件号码">
            </div>
        </section>
        <div class="inquire-btn" @click="checkBtn">查询</div>
    </div>
</template>

<script>
    export default {
        name: "Taxform",
        data:function () {
            return{
                name:'',//姓名
                cardType:'',//身份证件类型
                cardNum:'',//证件号码
            }
        },
      methods:{
        checkBtn:function () {
          const info = { name: 'hou', age: 24, id: '001' };
          localStorage.setItem('hou', JSON.stringify(info));
          this.$router.push({
            path: `/`,
          })
          console.log(this.name);
          //将信息添加到后台
          // this.axios({
          //   method:'post',
          //   url:'/api/birthdayapi/insert.php',
          //   data:this.qs.stringify(
          //     {    //这里是发送给后台的数据
          //       name:this.name,
          //       cardType:this.cardType,
          //       cardNum:this.cardNum,
          //       // time:Date.parse(this.time)/1000,//生日时间
          //       telPhone:this.telPhone,
          //       authCode:this.authCode,
          //       // city:this.cityname,
          //       // NowTime:this.NowTime/1000,
          //       // token:this.$md5((Date.parse(this.time)/1000).toString()+(this.NowTime/1000).toString()+'jsdhgsdhfgohsdoifghofdh')
          //     }
          //   )
          // }).then((res,reject)=>{
          //   console.log(res);
          // })
        }
      }
    }
</script>

<style scoped>
    .tax-form-box{
        width:100%;
        height: 100vh;
        background: #ffff;
    }
    /*<!--头部-->*/
    .tax-header{
        width:100%;
        height: 88px;
        background:#41A1FF;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-title{
        font-size:36px;
        font-weight: 600;
        text-shadow: 1px 1px 2px #0367ca;/*no*/
        text-space: 2;
        color:#fff;
    }
    /*表单*/
    .sec-box{
        width:84%;
        height: auto;
        margin:auto;
    }
    .sec-flex{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width:100%;
        height: 106px;
        border-bottom:1px solid  #E4E6E9;/*no*/
    }
    .sec-flex input{
        height: 60px;
        width: auto;
        font-size:32px;/*px*/
        outline: none;
        border:0;
        padding-left:8px;
    }
    .sec-flex select{
        height: 60px;
        width: 440px;
        font-size:32px;/*px*/
        outline: none;
        border:0;
    }
    .sec-title{
        color:#565656;
        font-size:32px;/*px*/
        width:208px;
        display: inline-block;
        text-align: left;
    }

    /*查询*/
    .inquire-btn{
        width:550px;
        height: 96px;
        border-radius: 5px;/*no*/
        display: flex;
        justify-content: center;
        align-items: center;
        background:#41A1FF;
        font-size:36px;/*px*/
        color:#fff;
        margin:260px auto 0;
    }

</style>
