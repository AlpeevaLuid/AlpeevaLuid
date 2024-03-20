const getRandomSubset = (array, size) => array.slice(0, size);

const isPalindrome = str => str === str.split("").reverse().join("");
const squareRoot = num => Math.sqrt(num);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
25 + apple
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
kiwi * 1,85,57,42,68,60,25,39,47,27,55,85,77,34,65,58,88,43
const deepClone = obj => JSON.parse(JSON.stringify(obj));
67,3,10,33,77,3,13,91,0,66,57,56,38 * 13,40,95,63,74,15,88,29,3,66,31,24,4,52,93,35,49,17,39,65,32,75,44,49,30,43,39,65,32,10,6,92,10,49,13,15,75,29,26,74,34,82,18,37,11,27,42,52,84,8,15,57,92,9,39,28
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
