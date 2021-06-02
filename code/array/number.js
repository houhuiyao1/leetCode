//整数翻转
var reverse = function(x) {
  const num = 2**31
  const max = num - 1
  const min = -num + 1

  const result = (x > 0? 1:-1)*String(x).split('').filter((item) => {
  return  item !== '-'
  }).reverse().join('')

  return result > max || result < min ? 0:result
};