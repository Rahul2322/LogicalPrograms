function traiangle(n) {
  let str = "",
    count;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str += " *";
    }
    str += "\n";
  }
  return str;
}
console.log(traiangle(5));

function star(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    for (let k = 1; k <= 2 * (n - i); k++) {
      string += " ";
    }
    for (let l = i; l > 0; l--) {
      string += l;
    }
    string += "\n";
  }
  return string;
}

console.log(star(4));

function star1(n) {
  let string = "",
    count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += count + " ";
      count++;
    }

    string += "\n";
  }
  return string;
}

console.log(star1(5));

function star2(n) {
  let string = "",
    charAt = 64;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += String.fromCharCode(charAt + j) + " ";
    }

    string += "\n";
  }
  return string;
}

console.log(star2(5));

function star3(n) {
  let string = "",
    charAt = 64;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      string += String.fromCharCode(charAt + j) + " ";
    }

    string += "\n";
  }
  return string;
}

console.log(star3(5));

function star4(n) {
  let string = "",
    charAt = 65;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += String.fromCharCode(charAt) + " ";
    }
    charAt++;
    string += "\n";
  }
  return string;
}

console.log(star4(5));

function star5(n) {
  let string = "",
    charAt = 64;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      string += " ";
    }
    for (let k = 1; k <= Math.round(i / 2) + 1; k++) {
      string += String.fromCharCode(charAt + k);
    }
    // for(let k=1;k<=Math.round(i/2)+1;k++){
    //    string+=String.fromCharCode(charAt + k) ;
    // }
    string += "\n";
  }
  return string;
}

console.log(star5(5));

function star6(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    let chr = 65,
      breakpoint = Math.floor((2 * i + 1) / 2);
    for (let k = 0; k < 2 * i + 1; k++) {
      console.log(breakpoint, k);
      str += String.fromCharCode(chr);
      if (k < breakpoint) chr++;
      else chr--;
    }
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    str += "\n";
  }

  return str;
}

console.log(star6(5));

function star7(n) {
  let char = 65 + n - 1,
    str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      str += String.fromCharCode(char + j - 1);
    }
    char--;
    str += "\n";
  }
  return str;
}

console.log(star7(6));

let sum = 15;
for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) sum -= i;
}
console.log(sum);

let str = "ABCDE";
let res = "";
for (let i = 0; i < str.length; i++) {
  console.log((res = str[str.length - 1 - i] + res));
}

function star8(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      str += "*";
    }
    for (let n = 1; n <= 2 * i; n++) {
      str += " ";
    }
    for (let k = 0; k <= n - i - 1; k++) {
      str += "*";
    }
    str += "\n";
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    for (let m = 1; m <= 2 * (n - i - 1); m++) {
      str += " ";
    }
    for (let k = 0; k <= i; k++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

console.log(star8(5));

var a = 20;
var b = 20;
const c = 30;

const obj = {
  a: 10,
  arrow: () => {
    console.log(this.a, this.b, this.c);
  },

  regular: function () {
    console.log(this.a, this.b, this.c);
  },
};
console.log(obj.regular());
console.log(obj.arrow());

//arr=[2,3,1,1,4]
function minJumps(arr) {
  let jump = 0;
  let pos = 0;
  let des = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    des = Math.max(des, arr[i] + i);

    if (pos == i) {
      pos = des;
      jump++;
    }
  }

  return jump;
}

console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));

let obj1 = {
  name: "john",
  age: 30,
  address: {
    street: "121322",
    city: "skjdhs",
    state: "e",
  },
};
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copyObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = deepCopy(obj[key]);
    }
  }
  return copyObj;
}

const obj2 = deepCopy(obj1);
obj2.address.city = "LosAnege";
console.log(obj2.address.city);

function count() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = count();
console.log(counter());
console.log(counter());
console.log(counter());

for (let index = 0; index < "12".length; index += 2) {
  console.log(index);
}

function generateParenthesis(n) {
  let res = [];
  let curr = "";
  function parenthesis(n, curr, o, c) {
    if (o == n && c == n) {
      res.push(curr);
      return;
    }

    if (o < n) {
      parenthesis(n, curr + "(", o + 1, c);
    }

    if (o > c) {
      parenthesis(n, curr + ")", o, c + 1);
    }
  }
  parenthesis(n, curr, 0, 0);

  return res;
}

console.log(generateParenthesis(2));

function subsequences(n, str, curr, indx, res) {
  if (indx == n) {
    res.push(curr);
    return;
  }

  //Include
  subsequences(n, str, curr + str[indx], indx + 1, res);
  //Exclude
  subsequences(n, str, curr, indx + 1, res);
}

function main(n, str) {
  let curr = "",
    res = [];
  subsequences(n, str, curr, 0, res);
  return res.sort();
}
console.log(main(3, "abc"));
console.log(main(2, "aa"));

function secMin(arr) {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2 && arr[i] > min1) {
      min2 = arr[i];
    }
  }

  return min2;
}

console.log(secMin([3, 5, 8, 4, 2, 10, 9]));

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
const result = items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(result);

//[1,2,3,7,5], target = 12
function subArraySum(arr, target) {
  // code here
  let start = 0;
  let sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum > target && start <= end) {
      sum -= arr[start];
      start++;
    }

    if (sum == target) {
      return [start + 1, end + 1];
    }
  }
  return [-1];
}

console.log(subArraySum([1, 2, 3, 7, 5], 12));

function mergeInterval(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i][0];
    let end = arr[i][1];
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }
    ans.push([start, end]);
  }
  return ans;
}

console.log(
  mergeInterval([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
  ]),
  "sortt"
);
