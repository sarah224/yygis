<template>
    <div class="container">
        <div class="form_box">
            <form action="" method="post" enctype="multipart/form-data" class="form">
                <div class="log_messages">
                    <img src="../assets/images/name.png" alt="">
                    <input type="text" id="name" autofocus="autofocus" required="required" v-model="name">
                </div>
                <div class="log_messages">
                    <img src="../assets/images/pwd.png" alt="">
                    <input type="password" id="password" required="required" v-model="pwd">
                </div>
                <!--<div class="submit" @click="login()">登录</div>-->
                <div class="submit">
                    <button @click="login"></button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: null,
                pwd: null
            }
        },
        methods: {
            login() {
                axios.post('yygis/login.php')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/login.jpg);
        background-size: 100% 100%;
        position: relative;
    }

    .form_box {
        position: absolute;
        top: 25%;
        left: 50%;
        width: 320px;
        height: 200px;
        background: rgba(255, 255, 255, .4);
        margin-left: -160px;
        border-radius: 20px;
        padding-top: 30px;
    }

    .form {
        width: 260px;
        margin: 0 auto;
    }

    .form input {
        width: 200px;
        height: 40px;
        border: none;
        background: none;
        font-size: 16px;
    }

    .log_messages, .submit {
        height: 40px;
        width: 260px;
        background: rgba(255, 255, 255, .5);
        margin: 6px 0;
        border-radius: 10px;
    }

    .log_messages img {
        float: left;
        width: 20px;
        height: 20px;
        padding: 10px 12px;
    }

    .submit {
        text-align: center;
        background: rgba(2, 34, 160, .7)
    }

    .submit input {
        color: #fff;
    }

    /*.submit{*/
    /*color: #fff;*/
    /*line-height: 40px;*/
    /*text-align: center;*/
    /*background: rgba(2,34,160,.7)*/
    /*}*/
    .forget_pwd {
        display: inline-block;
        padding: 0 5px;
        font-size: 14px;
    }

    .register {
        display: inline-block;
        float: right;
        padding: 0 5px;
        font-size: 14px;
    }
</style>
