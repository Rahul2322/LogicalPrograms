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

 //Problem Statement: Given a String, find the length of longest substring without any repeating character.

   function solve(str) {
      //O(N^2)
      if (str.length === 0) {
          return 0;
      }
  
      let maxans = Number.MIN_VALUE;
      for (let i = 0; i < str.length; i++) {
          let se = new Set();
          for (let j = i; j < str.length; j++) {
              if (se.has(str.charAt(j))) {
                  maxans = Math.max(maxans, j - i);
                  console.log(se)
                  break;
              }
              se.add(str.charAt(j));
          }
      }
      return maxans;
  }
  
   function lengthOfLongestSubstring(str){
       //O(N)
      let left = 0,right = 0,len=0
      let hashMap = new Map();

      while(right < str.length){
      console.log(hashMap)
         if(hashMap.has(str.charAt(right))) {
            console.log(str.charAt(right),right,hashMap.get(str.charAt(right)))
            left = Math.max(hashMap.get(str.charAt(right)) + 1,left);
         }

         hashMap.set(str.charAt(right),right);
         len = Math.max(len,right-left+1);
         right++
      }
return len
   }

   console.log(lengthOfLongestSubstring('abcabcbb'))
   console.log(lengthOfLongestSubstring('abcabcdeabcd'))


   var myObject = {
      foo: "bar",
      func: function() {
          var self = this;
          console.log("outer func:  this.foo = " + this.foo);
          console.log("outer func:  self.foo = " + self.foo);
          (function() {
              console.log("inner func:  this.foo = " + this.foo);
              console.log("inner func:  self.foo = " + self.foo);
          }());
      }
  };
  myObject.func();

  /*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
  */

  var frequencySort = function(s) {
    let result = '',hash={};
    for(let i=0;i<s.length;i++){
       hash[s[i]] = (hash[s[i]] || 0) + 1
    }
    let sortedChars = Object.keys(hash).sort((a,b)=>hash[b] - hash[a]);
    for(let char of sortedChars){
      result+= char.repeat(hash[char])
    }
    return result;
  };

  console.log(frequencySort('2a554442f544asfasssffffasss'))