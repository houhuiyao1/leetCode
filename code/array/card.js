//卡牌分组
export default (arr) => {
  if(arr.length <= 1)return false
  arr.sort((a,b) => {
    return a - b
  })
  let min = Number.MAX_SAFE_INTEGER
  let disk = []
  var result = true
  
  for(let i = 0 , tmp = [];i < arr.length;i++){
    tmp.push(arr[i])
    for(let j = i + 1;j < arr.length - 1;j++){
      if(arr[i] === arr[j]){
        tmp.push(arr[j])
      }else{
        if(min > tmp.length){
          min = tmp.length
        }
        disk.push([].concat(tmp))
        tmp.length = 0
        i = j - 1
        break
      }
    }   
  }

  disk.every((item) => {
    if(item.length % min !== 0){
      result = false
      return false
    }
  })

  return result
}
