export default (str) =>{
  //建立电话号码映射
  const map = ['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  let num = str.split('')
  //保存键盘映射后的字母内容，如 23 => ['abc','def']
  let code = []
  num.forEach((item) => {
    if(map[item]){
      code.push(map[item])
    }
  })

  function comb(arr){
    let temp = []
    for(let i = 0;i < arr[0].length;i++){
      for(let j = 0;j < arr[1].length;j++){
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0,2,temp)
    if(arr.length > 1){
      comb(arr)
    }else{
      return temp
    }
    return arr[0]
  }

  return comb(code)
}

