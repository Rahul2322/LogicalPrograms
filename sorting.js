function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
    }
    return arr
  }
  
  console.log(selectionSort([64, 25, 12, 22, 11]))
  
  function bubbleSort(arr) {
    let temp;
    for (let i = arr.length - 1; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr
  }
  
  console.log(bubbleSort([6, 3, 0, 5]))
  
  
  function insertionSort(arr) {
        let temp;
        for(let i=0;i<=arr.length -1;i++){
            j = i;
            while(j > 0 && arr[j - 1] > arr[j]){
                temp = arr[j -1];
                arr[j -1 ] = arr[j];
                arr[j] = temp;
                j--;
            }
        }
        return arr;
  }

  console.log(insertionSort([6, 3, 0, 5]))


  function merge(arr,low,mid,high){
    let temp = [],left = low , right = mid+1;
    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left]);
            left++
        }else{
            temp.push(arr[right]);
            right++;
        }
    }

    while(left <= mid){
        temp.push(arr[left]);
        left++;
    }

    while(right<=high){
        temp.push(arr[right]);
        right++;
    }

    for(let i=low;i<=high;i++){
        arr[i] = temp[i - low];
    }
  }


  function ms(arr,low,high){

        if(low >= high){
            return 
        }
        let mid = Math.floor((low+high)/2);

        ms(arr,low,mid);
        ms(arr,mid+1,high);
        merge(arr,low,mid,high);


  }

  function mergeSort(arr){
     ms(arr,0,arr.length-1);
     return arr;
  }

  console.log(mergeSort([4,2,1,6,7]))