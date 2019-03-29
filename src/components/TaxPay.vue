<template>
  <div>
    <header class="tax-header">
      <span class="header-title">功能列表</span>
    </header>
    <div class="already">
      <p class="alreadyspan">已申请</p>
    </div>
    <section class="section-box">
      <img class="sec-img" src="../../static/img/tax-img1.png" alt="">
      <div class="sec-details">
        <p class="ptitle1">住房贷款</p>
        <p class="ptitle2">专项扣除</p>
      </div>
    </section>
    <section class="section-box">
      <img class="sec-img" src="../../static/img/tax-img2.png" alt="">
      <div class="sec-details">
        <p class="ptitle1">住房贷款</p>
        <p class="ptitle2">专项扣除</p>
      </div>
    </section>
    <div class="not-apply">
      <p class="not-apply-span">未申请</p>
    </div>
    <section class="section-box">
      <img class="sec-img" src="../../static/img/tax-img3.png" alt="">
      <div class="sec-details">
        <p class="no-ptitle1">住房贷款</p>
        <p class="ptitle2">专项扣除</p>
      </div>
    </section>
    <section class="section-box">
      <img class="sec-img" src="../../static/img/tax-img4.png" alt="">
      <div class="sec-details">
        <p class="no-ptitle1">住房贷款</p>
        <p class="ptitle2">专项扣除</p>
      </div>
    </section>
    <section class="section-box">
      <img class="sec-img" src="../../static/img/tax-img5.png" alt="">
      <div class="sec-details">
        <p class="no-ptitle1">住房贷款</p>
        <p class="ptitle2">专项扣除</p>
      </div>
    </section>
  </div>
</template>
<script>
    export default {
      name: "TaxPay",
      mounted:function () {
        this.axios.get('/api/wxservice/workwx/index.php/Home/tax/codeinfo').then((res)=>{
          console.log(res);
        })
        var data1 = JSON.parse(localStorage.getItem('hou'));
        console.log(data1);
        if(data1!==null){
          this.axios.get('/api/wxservice/workwx/index.php/Home/tax/codeinfo').then((res)=>{
            console.log(res);
          })
        }else{
          this.$router.push({
            path: `/taxform`,
          })
        }

      }
    }
</script>
<style scoped>
  /*<!--已申请-->*/
  .already{
    width:100%;
    height: 82px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .alreadyspan{
    font-size:32px;/*px*/
    color:#41a1ff;
    position: relative;
  }
  .alreadyspan:after{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 140px;
    margin: auto;
    width: 2.666667rem;
    height: 1px;/*no*/
    background: #BFBFBF;
  }
  .alreadyspan:before{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 140px;
    margin: auto;
    width: 2.666667rem;
    height: 1px;/*no*/
    background: #BFBFBF;
  }
  /*未申请*/
  .not-apply{
    width:100%;
    height: 82px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .not-apply-span{
    font-size:32px;/*px*/
    color:#bfbfbf;
    position: relative;
  }
  .not-apply-span:after{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 140px;
    margin: auto;
    width: 2.666667rem;
    height: 1px;/*no*/
    background: #BFBFBF;
  }
  .not-apply-span:before{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 140px;
    margin: auto;
    width: 2.666667rem;
    height: 1px;/*no*/
    background: #BFBFBF;

  }
  /**/
  .no-ptitle1 {
    color: #bfbfbf;
    font-size: 56px; /*px*/
  }
  .ptitle1{
    color:#58b5fd;
    font-size:56px;/*px*/
  }
  .ptitle2{
    color:#A8A8A8;
    font-size:35px;/*px*/
    line-height: 2;
  }
  .section-box{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #fff;
    border-radius: 10px;/*no*/
    width: 84%;
    height: 170px;
    margin:0 auto 20px;
    box-shadow: 1px 1px 0px #dad9d9;
  }
  /*<!--列表-->*/
  .sec-img{
    display: block;
    width:150px;
    height: auto;
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


</style>
