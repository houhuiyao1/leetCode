var findKthLargest = function(nums, k) {
  nums.sort(function(a,b){return a-b});
  console.log(nums);
  let max = nums[nums.length - k]
  console.log(max);

  return max
};

findKthLargest([3,2,1,5,6,4],2)

