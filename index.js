

// Big-O notation   
// O(n)   (linear) single for loop  //n = number of input,
// O(n^2)  nested for loop
// O(1) for sigle input 

const fibonacci = (n) =>{
    let fib = [0,1] 
    for(let i = 2; i<n ; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

// console.log(fibonacci(2)) 
// console.log(fibonacci(3)) 
// console.log(fibonacci(7))



const factorila = (n) =>{
    let fac = 1
    for(let i = 1; i<=n; i++) {
        fac*=i
    }
    return fac

}

// console.log(factorila(5))
// Big-O = O(n) // here, n = 5


const primeNumber = (n) =>{
    if(n<2) {
        return false
    }
    for(let i = 2; i<n; i++) {
        if(n%i===0) {
            return false
        }
    }
    return true
}
//console.log(primeNumber(5))



const isPowerTwo = (n) =>{
    if(n<1){
        return false
    }
    while(n>1) {
        if(n%2!==0){
            return false
        }
        n= n/2 
    }
    return true
}

//console.log(isPowerTwo(4))

// recursive 

const recursiveFibonacci = (n) =>{
    if(n<2) {
        return n
    }
   return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))

const recursiveFactorial = (n) =>{
    if(n===0) {
        return 1
    }
    return n*recursiveFactorial(n-1)
}

//console.log(recursiveFactorial(5))

// linear search
let arr = [2,3,4,6,10,20]
let find = 6 
// for(let i= 0 ; i<arr.length; i++) {
//    if(arr[i]==find) {
//     console.log(i)
//    }
// }

const linearSearch = (arr) =>{
    for(let i = 0 ; i<arr.length; i++) {
        if(arr[i] ==find) {
            return i
        }
    }
    return -1
}

//console.log(linearSearch(arr))


// binary search 

let arr2 = [2,3,4,6,10,20]
let find2 = 6 //aldkfjakfd
const binarySearch = (arr) =>{
    let start = 0 ;
    let end = arr.length-1;
    while(start<=end) {
        let mid = Math.floor((start+end)/2)
        if(arr[mid]==find2) {
            return mid
        }else if(arr[mid]<find2) {
            start= mid+1
        }else{
            end = mid -1
        }
    }
    return -1
}

//console.log(binarySearch(arr2))

// recursive binary

let arr3 = [2,3,4,6,10,20]
let find3 = 6
let start = 0
let end = arr3.length-1
let index = undefined
const recursiveBinary = (arr,start,end) =>{
        let mid = Math.floor((start+end)/2)
        if(arr[mid]==find3) {
            index = mid
        }else if(arr[mid]<find3) {
            recursiveBinary(arr,mid+1,end)
        }else{
            recursiveBinary(arr,start,mid-1)
        }
}

recursiveBinary(arr3,start,end)
//console.log(index)

// sortin 

// bubble sort 

const arr4 = [5,2,3,1,10,30,12]

// ascending
for(let i= 0 ; i<arr4.length; i++) {
    for(let j = 0 ; j<arr4.length; j++) {
        let temp = arr4[j]
        if(arr4[j]>arr4[j+1]) {
            arr4[j] = arr4[j+1]
            arr4[j+1] = temp
        }
    }
}
//console.log(arr4)

// discending
for(let i = 0 ; i<arr4.length; i++) {
    for(let j = 0 ; j<arr4.length; j++) {
        let temp = arr4[j]
        if(arr4[j]<arr4[j+1]){
            arr4[j] = arr4[j+1]
            arr4[j+1] = temp
        }
    }
}
//console.log(arr4)




// insertion sort 


//ascending
const arr5 = [5,2,3,1,10,30,12]
for(let i = 0 ; i<arr5.length; i++) {
    let current = arr5[i]
    let j = i-1
    while(j>-1 && (arr5[j]>current)){
        arr5[j+1] = arr5[j]
        j--
    }
    arr5[j+1] = current
}
// console.log(arr5)


//discending
for(let i = 0 ; i<arr5.length; i++) {
    let current = arr5[i]
    let j = i-1
    while(j>-1 && (arr5[j]<current)){
        arr5[j+1] = arr5[j]
        j--
    }
    arr5[j+1] = current
}
//console.log(arr5)



//quick sort 

// ascending
const arr6 = [5,2,3,1,10,30,12]
const quickSort = (arr) =>{
    if(arr.length<2){
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length-1]
    for(let i= 0 ; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

//console.log(quickSort(arr6))

// discending
const quickSort1 = (arr) =>{
    if(arr.length<2) {
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i= 0 ;i<arr.length-1; i++){
        if(arr[i]<pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
            
        }
    }
    return [...quickSort1(left), pivot, ...quickSort1(right)]
}

//console.log(quickSort1(arr6))



// merge sort 

// ascending
const mergeSort = (left,right) =>{
    let arr = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }

    }
    return [...arr,...left,...right]
}

//console.log(mergeSort([1,2,3],[2,5,6]))


// cartesian product 

let array1 = [1,2]
let array2 = [3,4]
const cartesianProduct = (arr1,arr2) =>{
    let result = []
    for(let i =0; i<arr1.length; i++){
        for(let j= 0 ; j<arr2.length; j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    return result
}
//console.log(cartesianProduct(array1,array2))
