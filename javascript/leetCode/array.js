
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

console.log(findMedianSortedArrays(nums1, nums2))