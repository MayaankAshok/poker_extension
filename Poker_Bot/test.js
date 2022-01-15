console.log("Hey");

function apiFunction(query, successCallback, errorCallback) {
    if (query == "bad query") {
        errorCallback("problem with the query");
    }
    successCallback("Your query was <" + query + ">");
}

// myFunction wraps the above API call into a Promise
// and handles the callbacks with resolve and reject
function apiFunctionWrapper(query) {
    return new Promise((resolve, reject) => {
        apiFunction(query,(successResponse) => {
            resolve(successResponse);
        }, (errorResponse) => {
            reject(errorResponse);
        });
    });
}

function getWeather() {
    let result = "NOOOOO";
    (async function() {
        result = await apiFunctionWrapper("query all users");
        
    })();
    console.log(result);
}       
// the next line will fail
// const result2 = await apiFunctionWrapper("bad query");
// console.log(result2);

getWeather()