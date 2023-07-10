const nums = [10, 1.5, 33, 5, 2, 8, 3, 2.5, 11, 23, 80, 65];

const gtFive = nums.filter(num => num > 5);

console.log(gtFive);
// ------------------------------
const numsObj = nums.map((num, idx, nums) =>{
  const numObj = {num: num};
  return numObj
} )

console.log(numsObj);
// ------------------------------

const reduceNums = nums.reduce((preNum, currNum, idx) =>{
  const mul = preNum * currNum
  return mul
}, 1 )

console.log(reduceNums);
// ------------------------------

// const findMax =  (list)=> {
//   const mx = Math.max(...list);
//   return mx
// }

//console.log(findMax(nums))

// ------------------------------


const findMax =  (list)=> {
  const mx = Math.max(...list);
  const mn = Math.min(...list);
  return [mx, mn]
}

const [mxNum, mnNum] = findMax(nums);
console.log(mxNum, mnNum)

const setOfNums = new Set([10,15,88,50]);
for(const entry of setOfNums.entries()){
  console.log(entry)
}
setOfNums.add(50);
setOfNums.add(10);
setOfNums.add(33)
setOfNums.add(17);
console.log("The New array after add some numbers")
for(const entry of setOfNums.entries()){
  console.log(entry)
}