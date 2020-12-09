// 手机号验证
export function checkPhone(value){
  let regPhpne = /^1[3456789]\d{9}$/;
  return regPhpne.test(value)
}