<template>
  <div class="login">
    <div class="l-form">
      <div class="l-tip">图书馆管理系统</div>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input
            v-model="form.name"
            v-validate="{required:true}"
            name="name"
            :class="{'is-danger':errors.has('name')}"
            data-vv-as="用户名"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <FormErrorMessage v-if="errors.has('name')">{{ errors.first('name') }}</FormErrorMessage>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            v-validate="{required:true}"
            name="password"
            :class="{'is-danger':errors.has('password')}"
            data-vv-as="密码"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <FormErrorMessage v-if="errors.has('password')">{{ errors.first('password') }}</FormErrorMessage>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import login from '../api/login.js'
import FormErrorMessage from '../components/common/FormErrorMessage.vue'
export default {
  name: 'Login',
  components: {
    FormErrorMessage
  },
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validate().then(result => {
        if (result) {
          login.submit(this.form).then(res => {
            // console.log('res:', res);
            if (res.data.status === 1) {
              // 将用户信息存储在vuex中
              this.$store.commit('loginIn', this.form.name)
              // 如果登录成功则跳转我index页面
              this.$router.push('/index')
            } else {
              // 使用element-ui的message组件，显示登录报错信息
              this.$message({
                message: res.data.message,
                type: 'error',
                duration: 5000
              })
            }
          }).catch(error => {
            this.$message({
              message: error,
              type: 'error',
              duration: 5000
            })
          })
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #000;
  .l-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 300px;
    margin: auto;
    border-radius: 8px;
    background: #fff;
    padding: 20px;
    .l-tip {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .el-form {
      width: 100%;
      margin: auto;
      margin-top: 20px;
      .el-form-item {
        button {
          width: 100%;
        }
      }
    }
  }
}
.is-danger input {
  border-color: #ff3860;
}
</style>
