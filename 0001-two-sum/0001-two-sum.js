/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (nums, target)=> {
    let temp = new Map()
    for(let i=0;i<nums.length;i++){
        if(temp.has(nums[i])) return [temp.get(nums[i]),i]
        temp.set(target - nums[i],i)
    }
};

             