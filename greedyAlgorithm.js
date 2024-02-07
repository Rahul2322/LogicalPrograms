/*
Problem Statement: The weight of N items and their corresponding values are given. We have to put these items in a knapsack of weight W such that the total value obtained is maximized.
Note: We can either take the item as a whole or break it into smaller units.

Example:

Input: N = 3, W = 50, values[] = {100,60,120}, weight[] = {20,10,30}.

Output: 240.00

Explanation: The first and second items  are taken as a whole  while only 20 units of the third item is taken. Total value = 100 + 60 + 80 = 240.00
*/

class Item{
    constructor(value,weight){
        this.value = value;
        this.weight = weight;
    }
}

function itemComparator(a,b){
   const r1 = a.value / a.weight;
   const r2 = b.value / b.weight;
   return r1 < r2 ?  1 : r1 > r2 ? -1 : 0; 
}

function fractionalKnapsack(W,arr){
const sortedArray = [...arr].sort(itemComparator);
let currWeight = 0;
let finalValue = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i].weight + currWeight < W){
        currWeight += arr[i].weight;
        finalValue += arr[i].value;
    }else{
        finalValue += Math.floor(arr[i].value / arr[i].weight) *(W-currWeight);
        break;
    }
}
return finalValue
}


const weight = 50;
const arr = [new Item(100, 20), new Item(60, 10), new Item(120, 30)];

const ans = fractionalKnapsack(weight, arr);
console.log(ans)

function minCoins(coins,v){
    let ans = [];
    for(let i =coins.length-1;i>=0;i-- ){
        while(v>=coins[i]){
            v-= coins[i];
            ans.push(coins[i])
        }
    }
return ans
}

console.log(minCoins([1,2,5,10,20,50,100,500,1000],49))
console.log(minCoins([1,2,5,10,20,50,100,500,1000],70))
console.log(minCoins([1,2,5,10,20,50,100,500,1000],121))



//N meetings in one room

/*
Problem Statement: There is one meeting room in a firm. You are given two arrays, start and end each of size N.For an index ‘i’,
 start[i] denotes the starting time of the ith meeting while end[i]  will denote the ending time of the ith meeting. 
 Find the maximum number of meetings that can be accommodated if only one meeting can happen in the room at a  particular time. 
 Print the order in which these meetings will be performed.

 Example:

Input:  N = 6,  start[] = {1,3,0,5,8,5}, end[] =  {2,4,5,7,9,9}

Output: 1 2 4 5

Explanation: See the figure for a better understanding. 
Initial Thought Process:-
Say if you have two meetings, one which gets over early and another which gets over late. Which one should we choose?  If our meeting lasts longer the room stays occupied and we lose our time. On the other hand, if we choose a meeting that finishes early we can accommodate more meetings. Hence we should choose meetings that end early and utilize the remaining time for more meetings.

Approach: 

To proceed we need a vector of three quantities: the starting time, ending time, meeting number. Sort this data structure in ascending order of end time. 

We need a variable to store the answer. Initially, the answer is 1 because the first meeting can always be performed. Make another variable, say limit that keeps track of the ending time of the meeting that was last performed. Initially set limit as the end time of the first meeting.

*/

class Solution{
    static comparator(m1,m2){
        if(m1.end < m2.end) return -1
        else if(m1.end > m2.end) return 1
        else if(m1.pos < m2.pos) return -1;
        return 1
    }

    maxMeetings(s,e,n){
        const meet = [];
        for(let i=0;i<n;i++){
            meet.push({start:s[i],end:e[i],pos:i+1})
        }
        meet.sort(Solution.comparator);
        console.log(meet)
        const answer = [];

        let limit = meet[0].end;
        answer.push(meet[0].pos);

        for(let i=1;i<meet.length;i++){
            if(meet[i].start > limit){
                limit = meet[i].end
                answer.push(meet[i].pos)
            }
        }

        console.log('The answer is',answer.join(" "))
    }
}

const obj = new Solution();
const start = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];
const end = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252];
const n = 8;
obj.maxMeetings(start,end,n)

/*
Problem Statement: We are given two arrays that represent the arrival and departure times of trains that stop at the platform. We need to find the minimum number of platforms needed at the railway station so that no train has to wait.
Input: N=6, 
arr[] = {9:00, 9:45, 9:55, 11:00, 15:00, 18:00} 
dep[] = {9:20, 12:00, 11:30, 11:50, 19:00, 20:00}

Output:3
*/


function countPlatforms(arr,dept,n){
    arr.sort();
    dept.sort();
    
    let platform_needed = 1, result = 1;
    let i=1;j=0;

    while(i<n && j<n){
        if(arr[i] <=dept[j]){
            platform_needed+=1;
            i++;
        }else {
            platform_needed-=1;
            j++
        }
        result = Math.max(platform_needed,result);
    }
    return result;
}

let arri  = [900,945,955,1100,1500,1800];
let dept = [920,1200,1130,1150,1900,2000];
let len = arri.length
console.log(countPlatforms(arri,dept,len));
console.log(countPlatforms([1020,1200],[1050,1230],2));
