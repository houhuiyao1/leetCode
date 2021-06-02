var sortArray = function(nums) {
  if(nums.length <= 1){
      return nums
  }
  const target = nums[0]
  const left = []
  const right = []
  for(let i = 1;i < nums.length; i++){
      if(nums[i] < target){
          left.push(nums[i])
      }else{
          right.push(nums[i])
      }
  }

  return sortArray(left).concat([target],sortArray(right))
};

console.log(sortArray([3,5,1,7,8,4,7,2,4,2,1]));