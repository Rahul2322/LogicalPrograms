//Fibonacci
function fibo(dp, n) {
  if (n <= 1) {
    return n;
  }
  if (dp[n] !== -1) return dp[n];

  dp[n] = fibo(dp, n - 1) + fibo(dp, n - 2);
  return dp[n];
}

function main() {
  const n = 10;
  const dp = Array(n + 1).fill(-1);
  console.log(fibo(dp, n));
}
main();

/**
  Geek wants to climb from the 0th stair to the (n-1)th stair. At a time the Geek can climb either one or two steps. A height[N] array is also given. Whenever the geek jumps from stair i to stair j, the energy consumed in the jump is abs(height[i]- height[j]), where abs() means the absolute difference. return the minimum energy that can be used by the Geek to jump from stair 0 to stair N-1.

Input: n = 4, height = {10 20 30 10}
Output: 20
Explanation:
Geek jump from 1st to 2nd stair(|20-10| = 10 energy lost). Then a jump from the 2nd to the last stair(|10-20| = 10 energy lost). So, total energy lost is 20 which is the minimum.
 */

function minimumEnergy(height, n) {
  const dp = Array(n).fill(-1);

  //memoization
  //   function solve(indx, dp, height) {
  //     if (indx == 0) return 0;
  //     if (dp[indx] !== -1) return dp[indx];

  //     let right = Infinity;

  //     let left =
  //       solve(indx - 1, dp, height) + Math.abs(height[indx] - height[indx - 1]);
  //     right =
  //       solve(indx - 2, dp, height) + Math.abs(height[indx] - height[indx - 2]);

  //     return dp[indx] = Math.min(left, right);

  //   }

  //   solve(n-1,dp,height)

  //Tabulation

  //   dp[0] = 1;
  //   let jumpTwo = Infinity;
  //   for (let i = 1; i < n; i++) {
  //     let jumpOne = dp[i - 1] + Math.abs(height[indx] - height[indx - 1]);
  //     if (i > 1) {
  //       jumpTwo = dp[i - 2] + Math.abs(height[indx] - height[indx - 2]);
  //     }
  //     dp[i] = Math.min(jumpOne, jumpTwo);
  //   }
  //   return dp[n - 1];

  //Spcae Optimization approach

  let prev = 0;
  let prev2 = 0;
  for (let i = 1; i < n; i++) {
    let jumpTwo = Infinity;
    let jumpOne = prev + Math.abs(height[indx] - height[indx - 1]);
    if (i > 1) {
      jumpTwo = prev2 + Math.abs(height[indx] - height[indx - 2]);
    }
    let curri = Math.min(jumpOne, jumpTwo);
    prev2 = prev;
    prev = curri;
  }
  return prev;
}

// Frog Jump with K Distance/ Learn to write 1D DP
/**
 *There is an array arr of heights of stone and Geek is standing at the first stone and can jump to one of the following: Stone i+1, i+2, ... i+k stone, where k is the maximum number of steps that can be jumped and cost will be |hi-hj| is incurred, where j is the stone to land on. Find the minimum possible total cost incurred before the Geek reaches the last stone.
 Input: k = 3, arr[]= [10, 30, 40, 50, 20]
Output: 30
Explanation: Geek will follow the path 1->2->5, the total cost would be | 10-30| + |30-20| = 30, which is minimum
 */

function minimizeCost(k, arr) {
  const n = arr.length;
  const dp = Array(n).fill(-1);
  //Memoization

  // function solve(indx,dp,k,height){
  //     if(indx == 0) return 0;
  //     if(dp[indx] !== -1) return dp[indx];
  //     let mnSteps = Infinity;
  //     for(let j=1;j<=k;j++){
  //         if(indx - j >= 0){
  //             let jump = solve(indx - j,dp,k) + Math.abs(height[indx] - height[indx - j]);
  //             mnSteps = Math.min(jump,mnSteps)
  //         }
  //     }

  //     dp[indx] = mnSteps;
  //     return dp[indx]
  // }
  // return solve(n-1,dp,k,height)

  //Tabulation

  // Initialize the first element in dp to 0
  dp[0] = 0;

  // Loop through the height array from index 1 to n-1
  for (let i = 1; i < n; i++) {
    // Initialize mmSteps to a large value
    let mmSteps = Infinity;

    // Loop through the last k elements (backward jumps)
    for (let j = 1; j <= k; j++) {
      // Check if it's possible to jump to the previous element
      if (i - j >= 0) {
        // Calculate the cost of the jump and update mmSteps with the minimum cost
        const jump = dp[i - j] + Math.abs(height[i] - height[i - j]);
        mmSteps = Math.min(jump, mmSteps);
      }
    }

    // Store the minimum cost in dp for the current index
    dp[i] = mmSteps;
  }

  // Return the minimum cost to reach the last element
  return dp[n - 1];
}

/**
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 */

function rob(nums) {
  const n = nums.length;
  // const dp = Array(n).fill(-1);

  //memoization
  //     function f(indx,nums,dp) {
  //         if (indx == 0) return nums[indx];
  //         if (indx < 0) return 0;
  //         if(dp[indx] !== -1) return dp[indx];

  //         let pick = nums[indx] + f(indx - 2, nums,dp);
  //         let notPick = f(indx - 1, nums,dp);
  //         return dp[indx] =  Math.max(pick, notPick)
  //     }
  //    return  f(n-1,nums,dp)

  //Tabulation
  // dp[0] = nums[0];
  // for(let i=1;i<n;i++){
  //     let pick = nums[i];
  //     if(i > 1){
  //         pick += dp[i-2];
  //     }
  //     let notPick = dp[i-1];

  //     dp[i] = Math.max(pick,notPick)
  // }
  // return dp[n-1];

  //Space Optimization
  let prev = nums[0];
  let prev2 = 0;
  for (let i = 1; i < n; i++) {
    let pick = nums[i];
    if (i > 1) {
      pick += prev2;
    }
    let notPick = prev;
    let curri = Math.max(pick, notPick);
    prev2 = prev;
    prev = curri;
  }
  return prev;
}

/**
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
 */

function rob1(nums) {
  const n = nums.length;
  const t1 = [];
  const t2 = [];
  for (let i = 0; i < n; i++) {
    if (i !== 0) t1.push(nums[i]);
    if (i !== n - 1) t1.push(nums[i]);
  }
  function solve(nums) {
    let prev = nums[0];
    let prev2 = 0;
    for (let i = 1; i < n; i++) {
      let pick = nums[i];
      if (i > 1) {
        pick += prev2;
      }
      let notPick = prev;
      let curri = Math.max(pick, notPick);
      prev2 = prev;
      prev = curri;
    }
    return prev;
  }

  return Math.max(solve(t1), solve(t2));
}

/**
 Geek is going for a training program. He can perform any of these activities: Running, Fighting, and Learning Practice. Each activity has some point on each day. As Geek wants to improve all his skills, he can't do the same activity on two consecutive days. Help Geek to maximize his merit points as you are given a 2D array of points arr, corresponding to each day and activity.

Example:
Input: n = 3 and arr[]= [[1,2,5],[3,1,1],[3,3,3]]
Output:11
Explanation: Geek will learn a new move and earn 5 point then on second day he will do running and earn 3 point and on third day he will do fighting and earn 3 points so, maximum point is 11.
 */

function maximumPoints(arr, n) {
  const dp = Array.from({ length: n }, () => Array(4).fill(-1));
  function f(day, last, points, dp) {
    if (day == 0) {
      let maxi = 0;
      for (let task = 0; task < 3; task++) {
        if (task != last) {
          maxi = Math.max(maxi, points[0][task]);
        }
      }
      return maxi;
    }
    if (dp[day][last] !== -1) return dp[day][last];
    let maxi = 0;
    for (let task = 0; task < 3; task++) {
      if (task !== last) {
        let point = points[day][task] + f(day - 1, task, points, dp);
        maxi = Math.max(point, maxi);
      }
    }
    return (dp[day][last] = maxi);
  }

  return f(n - 1, 3, arr, dp);
}

/**
 Given an array of positive integers, arr[] and a value, target, determine if there is a subset of the given set with sum equal to given target. 

Examples:

Input: arr[] = [3, 34, 4, 12, 5, 2], target = 9
Output: true 
Explanation: Here there exists a subset with target sum = 9, 4+3+2 = 9.
Input: arr[] = [3, 34, 4, 12, 5, 2], target = 30
Output: false
Explanation: There is no subset with target sum 30.
 */

function isSubsetSum(arr, target) {
  // code here
  const n = arr.length;
  const dp = Array.from({ length: n }, () => Array(target + 1).fill(-1));

  //memoization
  //   function f(indx, target, arr, dp) {

  // if (target == 0) return true;
  // if (indx == 0) return arr[0] == target;
  // if (dp[indx][target] !== -1) return dp[indx][target];
  // let notTake = f(indx - 1, target, arr, dp);
  // let take = false;
  // if (target >= arr[indx]) {
  //   take = f(indx - 1, target - arr[indx], dp);
  // }

  // return (dp[indx][target] = take || notTake);



  //   }
  
  //tabulation
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }
  if (arr[0] <= target) {
    dp[0][arr[0]] = true;
  }

  for (let indx = 1; indx < n; indx++) {
    for (let j = 1; j <= target; j++) {
      let notTake = dp[indx - 1][j];
      let take = false;
      if (j >= arr[indx]) {
        take = dp[indx - 1][j - arr[indx]];
      }

      dp[indx][j] = take || notTake;
    }
  }

  return dp[n - 1][target];
}

/**
 You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

function maxProfit(prices) {
  const n = prices.length;
  let mini = prices[0];
  let profit = 0;
  for (let i = 1; i < n; i++) {
    let cost = prices[i] - mini;
    profit = Math.max(profit, cost);
    mini = Math.min(mini, prices[i]);
  }
  return profit;
}

/**
 You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
 */

function maxProfit(prices) {
  const n = prices.length;
  // const dp = Array.from({length:n},()=>Array(2).fill(-1))
  //Memoization
  // function f(indx,buy,prices,dp){
  //     if(indx == n) return 0
  //     if(dp[indx][buy] !== -1) return dp[indx][buy];
  //       let profit  = 0;
  //       if(buy){
  //         profit = Math.max(-prices[indx] + f(indx+1,0,prices,dp) , 0 + f(indx+1,1,prices,dp))
  //       }else{
  //         profit = Math.max(prices[indx] + f(indx+1,1,prices,dp),0 + f(indx+1,0,prices,dp))
  //       }
  //     return dp[indx][buy] = profit;
  // }
  // return f(0,1,prices,dp)

  //Tabulation
  const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));
  dp[n][0] = 0;
  dp[n][1] = 0;
  for (let indx = n - 1; indx >= 0; indx--) {
    for (let buy = 0; buy < 2; buy++) {
      let profit = 0;
      if (buy) {
        profit = Math.max(-prices[indx] + dp[indx + 1][0], 0 + dp[indx + 1][1]);
      } else {
        profit = Math.max(prices[indx] + dp[indx + 1][1], 0 + dp[indx + 1][0]);
      }

      dp[indx][buy] = profit;
    }
  }
  return dp[0][1];
}
