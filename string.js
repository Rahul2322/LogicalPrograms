/*
Reverse a string

We start traversing the string from the end until we hit a space. It indicates that we have gone past a word and now we need to store it.
We check if our answer variable is empty or not
If it’s empty, it indicates that this is the last word we need to print, and hence, there shouldn’t be any space after this word.
If it’s empty we add it to our result with a space after it
*/


function reverseString(str){
    let left = 0;
    let right = str.length - 1 ;
    let temp = "",ans = "";
  
   while( left <=right){
     const char = str.charAt(left);
     if(char != ' '){
        temp+=char;
     }else if(char == " "){
        if(ans !== ""){
           ans=temp+" "+ans;
        }else{
           ans = temp;
        }
        temp =""
     }
     left++;
   }
  
   if(temp!==""){
     if(ans!==""){
        ans = temp + " " + ans;
     }else{
        ans = temp;
     }
   }
   return ans;
   }
  
   console.log(reverseString("TUF is great for interview preparation"))
   Number.MAX_SAFE_INTEGER



   const map = new Map();


   map.set(2,(map.get(2) || 0) + 1)
   map.set(2,(map.get(2) || 0) + 1)

   console.log(map)


   const startDate =  new Date();

   console.log('start',startDate)


   startDate.setDate(startDate.getDate() + 1);

   console.log('start',startDate)