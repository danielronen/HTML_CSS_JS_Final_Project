
function load() {
    alert('ברוכים הבאים')
    console.log('loading')
}

function demo() {
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * 10)
}
function reset() {
    document.getElementById("demo").innerHTML = "0"
}

function green() {
    document.getElementById("demo").style.backgroundColor = "green"
}
function red() {
    document.getElementById("demo").style.backgroundColor = "red"

}
function yellow() {
    document.getElementById("demo").style.backgroundColor = "yellow"

}

function RandomArr() {
    document.getElementById("console").innerHTML = "בדוק את הקונסול";
    console.log("getting function")
    var arr = new Array(Math.floor(Math.random() * 10));
    arr[0] = 1;
    console.log("arr was defined")
    for (let index = 1; index < arr.length; index++) {
        arr[index] = Math.floor(Math.random() * 100)
        console.log("number added")
    }
    console.log("after for loop")
    console.log("arr is: " + arr)
    
    /*
     הוספתי הדפסות לקונסול כדי לוודא שכל פעולה קוראת
    */
}

function dontResize() {
    alert("Do NOT try to resize the website")
}