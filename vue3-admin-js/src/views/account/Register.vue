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
          <a-input v-model:value="account_form.password" type="text" autocomplete="off"/>
        </a-form-item>
        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input v-model:value="account_form.passwords" type="text" autocomplete="off"/>
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <a-row gutter="12">
            <a-col :span="14">
              <a-input v-model:value="account_form.code" type="text" autocomplete="off"/>
            </a-col>
            <a-col :span="10">
              <a-button  type="primary" @click="getCode" :disabled="code_button_disabled" block>
                {{ button_text }}
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item name ='register'>
           <a-button html-type="submit" type="primary" block>
               注册
              </a-button>

        </a-form-item>

      </a-form>

    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {checkPhone,checkPassword as password,checkCode} from "@/utils/verification"
export default {
  name: "Login",
  setup(props) {
    // 校验用户名
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

    // 校验密码
    const checkPassword = async (rule, value, callback) => {
      console.log(222,value)
      var pass2 = formConfig.account_form.passwords
      if (!value) {
        return Promise.reject('请输入用户密码');
      }else if(!password(value)){
        return Promise.reject('请输入6-20数字和字母')
      }else if(pass2 && value &&(pass2 != value)){
        return Promise.reject('请确保两次密码一致')
      }else{
        return Promise.resolve()
      }
    };
    // 校验验证码
    const checkcode = async (rule, value, callback) => {
      console.log(333,value)
      if (!value) {
        return Promise.reject('请输入验证码');
      }else if(!checkCode(value)){
        return Promise.reject('请输入6位的数字和字母')
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
        username: [{validator: checkUsername, trigger: 'blur'}],
        password:[{validator: checkPassword, trigger: 'blur'}],
        passwords:[{validator: checkPassword, trigger: 'blur'}],
        code:[{validator: checkcode, trigger: 'blur'}]
      }
    })
    const buttonConfig =reactive({
      button_text:'获取验证码',
      time_range:6,
      code_button_disabled:false
    })
    const form_data = toRefs(formConfig);
    const form_button =toRefs(buttonConfig)
    // 提交表单
    const handleFinish = (value) => {
      alert(123,value)
      console.log(value)
    }
    const getCode = ()=>{
      if (!(formConfig.account_form.username&&formConfig.account_form.password&&formConfig.account_form.passwords)){
        alert('请先输入用户名和密码')
        return
      }
      if(buttonConfig.dataIte){clearInterval(buttonConfig.dataItem)}
      buttonConfig.dataItem = setInterval(()=>{
        buttonConfig.time_range--;
        console.log(buttonConfig.time_range);
        buttonConfig.button_text =buttonConfig.time_range+'秒'
        if (buttonConfig.time_range<=0){
          buttonConfig.button_text = '重新获取'
          clearInterval(buttonConfig.dataItem)
        }
      },1000)

    }

    return {
      ...form_data,
      ...form_button,
      handleFinish,
      getCode

    }

  }
}
</script>

<style lang="scss">
@import "./login";

</style>