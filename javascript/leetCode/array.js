
//get center value in sorted array
function findMedianSortedArrays(nums1, nums2) {
    let v = [...nums1, ...nums2];
    v.sort((a, b) => a - b)
    let len = v.length;

    if (len % 2 == 0) {
        let leng = v.length
        var a = leng / 2;
        var b = v[a - 1] + v[a]
        var c = b / 2
        return c;
    } else {
        let leng = v.length - 1
        var a = leng / 2;
        var c = v[a];
        return c;
    }
}

let nums1 = [1, 3]
let nums2 = [6, 7, 8]

// console.log(findMedianSortedArrays(nums1, nums2))

//two sum problem
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i)
    }
    return []

};

// console.log(twoSum([2, 7, 11, 15], 9));
