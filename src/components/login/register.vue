<template>
  <div class="signupform">
    <div class="container">
      <div class="agile_info">
        <div class="w3l_form">
          <div class="left_grid_info">
            <h1>Customize your personal documents</h1>
            <p>Donec dictum nisl nec mi lacinia, sed maximus tellus eleifend. Proin molestie cursus sapien ac eleifend.</p>
            <img src="images/image.jpg" alt="">
          </div>
        </div>
        <div class="w3_info">
          <h2>Register to your Account</h2>
          <p>Enter your details to Register.</p>
          <form action="#" method="post">
            <label>User Name</label>
            <div class="input-group">
              <span class="fa fa-envelope" aria-hidden="true"></span>
              <input type="text" placeholder="Enter Your UserName" required="">
            </div>
            <label>Email Address</label>
            <div class="input-group">
              <span class="fa fa-envelope" aria-hidden="true"></span>
              <input type="email" placeholder="Enter Your Email" required="">
            </div>
            <label>Password</label>
            <div class="input-group">
              <span class="fa fa-lock" aria-hidden="true"></span>
              <input type="Password" placeholder="Enter Password" required="">
            </div>
            <button class="btn btn-danger btn-block" type="submit">Register</button>
          </form>
          <p class="account">By clicking login, you agree to our <a href="#">Terms &amp; Conditions!</a></p>
          <p class="account1">Dont have an account? <a @click="toLogin" href="#">Login here</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        created(){

        },
        computed: {
        },
        methods: {
            /**
             * 跳转到注册页面
             */
            toLogin:function () {
                let _this = this;
                _this.$router.push("login");
            }
        }
    }
</script>
<style>
  .signupform {
    padding-top: 5%;
    margin: 0;
    background: #fff;
    min-height: 100vh;
    background: linear-gradient(to left, #f5f5f5 50%, #fff 50%);
    font-family: 'Raleway', sans-serif;
  }

  .container {
    width: 65%;
    margin: 0 auto;
  }

  .agile_info {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .w3l_form {
    padding: 0px;
    flex-basis: 50%;
    -webkit-flex-basis: 50%;
  }

  .left_grid_info {
    padding-right: 3em;
  }

  .left_grid_info h1 {
    font-size: 45px;
    margin: 1em 0em .5em 0em;
    color: #333;
    font-weight: 700;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
  }
  p.account, p.account1 {
    padding-top: 20px;
    padding-bottom: 0px;
    line-height: 1.5em;
    font-size: 13px;
  }
  p {
    margin: 0;
    color: #666;
    letter-spacing: 1px;
    line-height: 1.8em;
    font-size: 16px;
    font-weight: 400;
  }

  .w3_info {
    flex-basis: 50%;
    -webkit-flex-basis: 50%;
    box-sizing: border-box;
    padding: 3em 4em;
  }

  .w3_info h2 {
    display: inline-block;
    font-size: 26px;
    margin-bottom: 10px;
    color: #333;
    letter-spacing: 2px;
    text-transform: capitalize;
  }

  .w3_info label {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    color: #000;
    margin-bottom: 20px;
    font-size: 13px;
    padding-left: 0px;
  }

  .input-group {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 3px 10px;
    border: 1px solid #ddd;
    background: #fff;
  }

  .input-group {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 3px 10px;
    border: 1px solid #ddd;
    background: #fff;
  }

  .login-check {
    position: relative;
  }

  .btn-block {
    background: #43c83b;
    border: none;
    color: #fff;
    font-size: 13px;
    padding: 12px 40px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
  }
  user agent stylesheet
  button {
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: buttonface;
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
  }

  .input-group span.fa {
    font-size: 16px;
    vertical-align: middle;
    box-sizing: border-box;
    float: left;
    text-align: center;
    width: 6%;
    padding: 15px 0px;
    color: #01cd74;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input[type="email"] {
    font-size: 15px;
    color: #333;
    text-align: left;
    letter-spacing: 1px;
    padding: 14px 10px;
    width: 93%;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    outline: none;
    background: transparent;
    font-family: 'Raleway', sans-serif;
  }
  user agent stylesheet
  input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark-color(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: -internal-light-dark-color(white, black);
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
  }
  input[type="Password"] {
    font-size: 15px;
    color: #333;
    text-align: left;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 14px 10px;
    width: 93%;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    outline: none;
    background: transparent;
    font-family: 'Raleway', sans-serif;
  }

  user agent stylesheet
  input[type="password" i] {
    -webkit-text-security: disc !important;
  }
</style>

