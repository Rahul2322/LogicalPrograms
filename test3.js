
function traiangle(n){
   let str = '',count
   for(let i=0;i<n;i++){
      for(let j=0;j<n-i-1;j++){
         str+=' '
      }
      for(let k=0;k<i;k++){
         str+=' *'
      }
      str+='\n'
   }
   return str
}
console.log(traiangle(5))






function star(n) {
   let string = '';
   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
         string += j
      }
      for (let k = 1; k <= 2 * (n - i); k++) {
         string += ' '
      }
      for (let l = i; l > 0; l--) {
         string += l
      }
      string += '\n'
   }
   return string
}

console.log(star(4))


function star1(n) {
   let string = '', count = 1;
   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
         string += count + ' ';
         count++
      }

      string += '\n'
   }
   return string
}

console.log(star1(5))

function star2(n) {
   let string = '', charAt = 64;
   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
         string += String.fromCharCode(charAt + j) + ' ';
      }

      string += '\n'
   }
   return string
}

console.log(star2(5))

function star3(n) {
   let string = '', charAt = 64;
   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i + 1; j++) {
         string += String.fromCharCode(charAt + j) + ' ';
      }

      string += '\n'
   }
   return string
}

console.log(star3(5))


function star4(n) {
   let string = '', charAt = 65;
   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i ; j++) {
         string += String.fromCharCode(charAt) + ' ';
         
      }
      charAt++
      string += '\n'
   }
   return string
}

console.log(star4(5))

function star5(n){
   let string = '',charAt = 64;
   for(let i=1;i<=n;i++){
      for(let j =1;j<=n-i + 1;j++){
         string+=' '
      }
      for(let k=1;k<=Math.round(i/2)+1;k++){
         string+=String.fromCharCode(charAt + k) ;
      }
      // for(let k=1;k<=Math.round(i/2)+1;k++){
      //    string+=String.fromCharCode(charAt + k) ;
      // }
      string+='\n'
   }
   return string
}

console.log(star5(5))


function star6(n){
   let str = '' 
   for(let i=0;i<n;i++){
      for(let j=0;j<n-i-1;j++){
         str+=' '
      }
      let chr=65,breakpoint =Math.floor((2*i+1)/2);
      for(let k=0;k<2*i+1;k++){
         console.log(breakpoint,k)
         str+=String.fromCharCode(chr)
         if(k<breakpoint) chr++
         else chr--
      }
      for(let j=0;j<n-i-1;j++){
         str+=' '
      }
str+='\n'
   }

   return str
}

console.log(star6(5))

function star7(n){
   let char = 65 + n - 1,str=''
   for(let i=1;i<=n;i++){
      for(let j=1;j<i;j++){
         str+=String.fromCharCode(char + j -1)
      }
      char--;
      str+='\n'
   }
   return str
}

console.log(star7(6))

let sum =15;
for(let i=0;i<5;i++){
   if(i%2 == 0)sum-=i
}
console.log(sum)



let str = 'ABCDE'
let res =''
for(let i =0;i<str.length;i++){
    console.log(res = str[(str.length-1)-i] +res)
}



function star8(n){
   let str=''
   for(let i=0;i<n;i++){
      for(let j=0;j<=n-i-1;j++){
         str+='*'
      }
      for(let n=1;n<=2*i;n++){
         str+=' '
      }
      for(let k=0;k<=n-i-1;k++){
         str+='*'
      }
      str+='\n'
   }

   for(let i=0;i<n;i++){
      for(let j=0;j<=i;j++){
         str+='*'
      }
      for(let m=1;m<=2*(n - i -1);m++){
         str+=' '
      }
      for(let k=0;k<=i;k++){
         str+='*'
      }
      str+='\n'
   }

   return str
}

console.log(star8(5))




