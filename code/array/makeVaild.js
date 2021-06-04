var generateParenthesis = function(n){
  let ans = []

  const def = (left,right,str)=>{
    if(str.length == 2*n){
      ans.push(str)
      return
    }
    if(left > 0){
      def(left - 1,right,str + '(')
    }
    if(right > left){
      def(left,right-1,str + ')')
    }
  }
  def(n,n,'')
  return ans
}

console.log(generateParenthesis(3));