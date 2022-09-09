function binarySearch(arr, key) {
    arr.sort()                     // Sorting array in increasing order   
    let left=0, right=arr.length-1;
    while (left<=right){
        let mid=Math.floor(left + (right-left)/2)   // Finding the middle element
        if (arr[mid] === key) {
            return key
        }

        else if (arr[mid] < key) { // Look at right half since key is bigger than arr[mid]
            left = mid + 1
        }
        else {
            right = mid - 1        // Look at left half since key is smaller than arr[mid]
        }
    }
  
    return -1;                     // Key not present in the array
}

module.exports = binarySearch