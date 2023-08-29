function count(s){
    //code here
    let upper = 0,lower=0,numeric=0,specialChar=0;
    for(let i=0;i<s.length;i++){
        if(/[0-9]/.test(s[i])){
            numeric++
        }else if(/[A-Z]/.test(s[i])){
            upper++
        }else if(/[a-z]/.test(s[i])){
            lower++
        }else{
            specialChar++
        }
    }
 console.log(upper,lower,numeric,specialChar)
}

count('#GeeKs01fOr@gEEks07')


//Given a string and number of rows ‘n’. Print the string formed by concatenating n rows when input string is written in row-wise Zig-Zag

function zigZag(str,n){
    //Brute Force
    let arr = new Array(n).fill('')
    let row=0;
    let down =true;
      
    if( n == 1){
        return str
    }
    for(let i=0;i<str.length;i++){
       arr[row] += str[i]; 
       if(row == n - 1){
         down =false
       }else if(row == 0){
        down = true;
       }

       down ? row++ : row--

    }
   

   
  return arr.join('')
}

console.log(zigZag('GEEKSFORGEEKS',3))






// Function to reverse any sequence
// starting with pointer begin and
// ending with pointer end
function reverse(s, begin, end) {
	while (begin < end) {
		let charArray = [...s];
		let temp = charArray[begin];
		charArray[begin] = charArray[end];
		charArray[end] = temp;
		begin++;
		end--;
		s = charArray.join("");
	}
	return s;
}

function reverseWords(s) {
	let word_begin = -1;

	// /* temp is for word boundary */
	let i = 0;

	/*STEP 1 of the above algorithm */
	while (i < s.length) {

		/*This condition is to make sure that the
		string start with valid character (not
		space) only*/
		if ((word_begin == -1) && (s[i] != ' ')) {
			word_begin = i;
		}
		if (word_begin != -1
			&& ((s[i + 1] == ' ') || (i + 1 == s.length))) {
			s = reverse(s, word_begin, i);
			word_begin = -1;
		}
		i++;
	} /* End of while */

	/*STEP 2 of the above algorithm */
	s = reverse(s, 0, s.length - 1);
	return s;
}

// Driver Code
let s = "i like this program very much";

// Function call
s = reverseWords(s);
console.log(s);



function printAllDivisor(n){
    //brute force
    // for(let i=1;i<=n;i++){
    //     if(n%i == 0){
    //         console.log(i)
    //     }
    // }
/*
1*36
2*18
3*12
4*9
6*6
 up to the square root we will get every factors 
*/
    //optimal approach

    for(let i=1;i<=Math.sqrt(n);i++){
        if(n%i == 0){
          console.log('i',i)
          if(n/i !== i){
            console.log(n/i,'kkk',i)
        }
        }
       
    }
}

printAllDivisor(36)

function prime(n){
    let count = 0;
    for(let i=1;i*i <= n;i++){
        if(n%i == 0){
            count++;
            if(n/i !== i){
                count++;
            }
        }
    }

 return count == 2 ? true : false
}

console.log(prime(36))
console.log(prime(15))