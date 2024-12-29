// const response = [
//     {
//         "name":"John",
//         "age":30,
//         "city":"New York",
//         "country":"USA",
//         "Hobbies":["reading","swimming","hiking","swimming"],
//         "occupation":"programmer",
//         "favorite_foods":{"Breakfast":"pancakes","Lunch":"","dinner":"pasta","Snack":""},
//         "gear":{"type":"","material":"","color":null},
//         "affiliations":["","",""],
//         "friends":[
//             {"name":"Jane","age":28,"city":"New York","country":"USA","occupation":null},
//             {"name":"Tom","age":32,"city":"London","country":"UK","occupation":"teacher"},
//             {"name":"Jane","age":28,"city":"New York","country":"USA","occupation":null}
//         ]
//         }
//     ]
const https = require('https');

// Function to make GET request
https.get('https://coderbyte.com/api/challenges/json/wizard-list', (res) => {
  let data = '';

  // Append chunks of data as they are received
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Once the entire response is received
  res.on('end', () => {
    try {
      // Parse the JSON response
      let jsonData = JSON.parse(data);

      // Process the data
      let modifiedData =  jsonData.map(ele=>{
        let sortedObj = {};
        Object.keys(ele).sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase())).forEach(key=>{
            sortedObj[key] = ele[key];
            let sortedObjPropertyValue = sortedObj[key];
            
            
            if(Array.isArray(sortedObjPropertyValue) ){
                let checkFalsyVal = sortedObjPropertyValue.every(val =>val === '' || val === undefined || val === null);
                console.log(checkFalsyVal);
                
                if(!checkFalsyVal){
                    let duplicatesRemoved =  removeDuplicates(sortedObjPropertyValue);
                    sortedObj[key] = duplicatesRemoved
                }else{
                    delete sortedObj[key];
                }
            }else if(typeof sortedObjPropertyValue == 'object' && sortedObjPropertyValue != null){
                let checkFalsyVal = Object.values(sortedObjPropertyValue).every(val =>val === '' || val === undefined || val === null);
                console.log(checkFalsyVal,"obj");
                
                if(!checkFalsyVal){
                    return sortedObjPropertyValue
                }else{
                    delete sortedObj[key]
                }
            }
        })
        return sortedObj
    })

      // Console log the result as a string
      console.log(JSON.stringify(modifiedData));

    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}).on('error', (e) => {
  console.error(`Error with request: ${e.message}`);
});

const manipulateData = function(obj){
    if(Array.isArray(obj)){
       return removeDuplicates()
    }
}




function removeDuplicates(arr){
    let set = new Set();
    return arr.filter(ele=>{
        let stringifyObject = JSON.stringify(ele);
        if(set.has(stringifyObject)) return false
        else{
            set.add(stringifyObject)
            return true
        }
    })
    
}

const https = require('https');

 // Function to make GET request
 https.get('https://coderbyte.com/api/challenges/json/wizard-list', (res) => {
   let data = '';
 
   // Append chunks of data as they are received
   res.on('data', (chunk) => {
     data += chunk;
   });
 
   // Once the entire response is received
   res.on('end', () => {
     try {
       // Parse the JSON response
       let jsonData = JSON.parse(data);
 
       // Process the data
       let modifiedData = processObject(jsonData);
 
       // Console log the result as a string
       console.log(JSON.stringify(modifiedData));
 
     } catch (error) {
       console.error('Error parsing JSON:', error);
     }
   });
 }).on('error', (e) => {
   console.error(`Error with request: ${e.message}`);
 });


 const response = [
   {
       "name":"John",
       "age":30,
       "city":"New York",
       "country":"USA",
       "Hobbies":["reading","swimming","hiking","swimming"],
       "occupation":"programmer",
       "favorite_foods":{"Breakfast":"pancakes","Lunch":"","dinner":"pasta","Snack":""},
       "gear":{"type":"","material":"","color":null},
       "affiliations":["","",""],
       "friends":[
           {"name":"Jane","age":28,"city":"New York","country":"USA","occupation":null},
           {"name":"Tom","age":32,"city":"London","country":"UK","occupation":"teacher"},
           {"name":"Jane","age":28,"city":"New York","country":"USA","occupation":null}
       ]
       }
   ]
 
 // Function to process and modify the object
 function processObject(obj) {
   if (Array.isArray(obj)) {
     // Process array
     return removeDuplicates(obj.map(item => processObject(item)));
   } else if (typeof obj === 'object' && obj !== null) {
     // Process object
     let sortedObj = {};
     let varOcg = {}; // __define-ocg__: placeholder for cleaned object properties
 
     // Sort keys alphabetically in a case-insensitive way
     Object.keys(obj).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
       .forEach(key => {
         const processedValue = processObject(obj[key]);
         // Only keep properties that are not empty strings, null, or undefined
         if (processedValue !== '' && processedValue !== null && processedValue !== undefined) {
           sortedObj[key] = processedValue;
         }
       });
 
     // Return the processed object with sorted keys
     return sortedObj;
   } else {
     // For primitive types, return as is
     return obj;
   }
 }
 
 // Function to remove duplicate objects from an array
 function removeDuplicates(arr) {
   const seen = new Set();
   return arr.filter(item => {
     const stringifiedItem = JSON.stringify(item);
     if (seen.has(stringifiedItem)) {
       return false;
     } else {
       seen.add(stringifiedItem);
       return true;
     }
   });
 }
 


