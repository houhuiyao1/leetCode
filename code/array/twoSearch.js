let twoSearch = function(nums,target){
  let low = 0;
  let high = nums.length - 1
  let mid = 0,elem = 0
  while(low <= high){
    mid = Math.floor((low + high)/2)
    elem = nums[mid]
    if(elem < target){
      low = mid + 1
    }else if(elem > target){
      high = mid - 1
    }else{
      return mid
    }
  }
  return -1
}

console.log(twoSearch([-1,0,3,5,12],9));