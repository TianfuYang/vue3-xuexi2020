// 手机号验证
export function checkPhone(value){
  let regPhpne = /^1[3456789]\d{9}$/;
  return regPhpne.test(value)
}

// 6--20 位数的数字加字母
export function checkPassword(value){
  let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return regPassword.test(value)
}

// 6位验证码
export function checkCode(value){
  let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6}$/;
  return regPassword.test(value)
}