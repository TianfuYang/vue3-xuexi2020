<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
          name="custom-validation"
          ref="ruleForm"
          @finish="handleFinish"
          v-bind:model="account_form"
          :rules="rules_form"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="account_form.username" type="text" autocomplete="off"/>
        </a-form-item>
        <a-form-item name="password">
          <label>密码</label>
          <a-input v-model:value="account_form.password" type="password" autocomplete="off"/>
        </a-form-item>

        <a-form-item>
          <label>确认密码</label>
          <a-input v-model="account_form.passwords" type="password" autocomplete="off"/>
        </a-form-item>

        <a-form-item>

          <label>验证码</label>

          <a-row gutter="12">
            <a-col :span="16">
              <a-input v-model="account_form.code" type="password" autocomplete="off"/>
            </a-col>
            <a-col :span="8">
              <a-button html-type="submit" type="primary" block>
                注册
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>

      </a-form>

    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {checkPhone} from "@/utils/verification"
export default {
  name: "Login",
  setup(props) {
    const checkUsername = async (rule, value, callback) => {
      console.log(111,value)

      if (!value) {
        return Promise.reject('请输入用户名');
      }else if(!checkPhone(value)){
        return Promise.reject('请输入正确的手机号')

      }else{
        return Promise.resolve()
      }

    };

    // 可以用reactive 定义对象类型的数据
    const formConfig = reactive({
      layout: {
        labelCol: {span: 4},
        wrapperCol: {span: 14},
      },
      account_form: {
        username: '',
        password: '',
        passwords: '',
        code: ''
      },
      rules_form: {
        username: [
          {validator: checkUsername, trigger: 'blur'}
        ],
      }

    })
    const data = toRefs(formConfig);

    // 提交表单
    const handleFinish = () => {
      alert(123)
    }

    return {
      ...data,
      handleFinish,

    }

  }
}
</script>

<style lang="scss">
@import "./login";

</style>