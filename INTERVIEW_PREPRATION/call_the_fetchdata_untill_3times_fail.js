

function fetchData() {
  return Math.random() > 0.7
    ? Promise.resolve("Success")
    : Promise.reject("Failed");
}

/* 
        try calling it
     👉 If it fails, retry again
     👉 Maximum 3 attempts
     👉 If still fails → print "Failed after 3 retries"

 
*/
/* 
                solution
step 1 :create a async function with name fetchDataWithRetry
step 2 : create a for loop which will run 3 times
step 3 : inside the loop call fetchData function with await keyword
step 4 : if it is resolved print the data and break the loop

*/

async function fetchDataWithRetry(){

    // first we call the function suppose it will pass
    for(let i=0;i<3;i++){
        try{
            const data= await fetchData();
            console.log("data fetch succesfully:",data);
            break;
        }catch(err){
            console.log(`Attempt ${i+1} failed:`,err);
            if(i===2){
                console.log("Failed after 3 retries");
            }

        }
    }
}
// other solution is using the recusrion

async function fetchDataWithRetryRecursion(attempts=3){

    try{
        const data =await fetchData();
        console.log("data fetch successfully:",data);

    }catch(err){
        if(attempts-1>0){
            console.log(`Attempt ${4-attempts} failed:`,err);
            await fetchDataWithRetryRecursion(attempts-1);
        }
    }
}
