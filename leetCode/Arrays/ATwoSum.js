var twoSum = function(nums,target){
var map = {};

for(let i=0; i<nums.length; i++){
 let remain = target-nums[i];
 if(map[remain] !== undefined){
    return [map[remain],i];
 }
 map[nums[i]]=i;
}
};
console.log(twoSum([2,7,11,5],9));