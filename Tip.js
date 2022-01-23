var Employee = /** @class */ (function () {
    function Employee(name, hours) {
        this._name = name;
        this._hours = hours;
        this._salary = 0;
    }
    Employee.prototype.setSalary = function (s) {
        this._salary = s;
    };
    Employee.prototype.getSalary = function () {
        return this._salary;
    };
    Employee.prototype.getHours = function () {
        return this._hours;
    };
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.toString = function () {
        return "\u05E2\u05D5\u05D1\u05D3 [ \u05E9\u05DD: " + this._name + ", \u05E9\u05E2\u05D5\u05EA: " + this._hours + ", \u05EA\u05E9\u05DC\u05D5\u05DD: " + this._salary + ", \u05E9\u05E2\u05EA\u05D9: " + (this._salary / this._hours) + "]";
    };
    return Employee;
}());
function kukula() {
    // let n: number = Number(document.getElementById("n"));
    // let a: string = String(document.getElementById("a"));
    // let b: string = String(document.getElementById("b"));
    // let c: string = String(document.getElementById("c"));
    // let d: string = String(document.getElementById("d"));
    // let aHour: number = Number(document.getElementById("aHours"));
    // let bHour: number = Number(document.getElementById("bHours"));
    // let cHour: number = Number(document.getElementById("cHours"));
    // let dHour: number = Number(document.getElementById("dHours"));
    // let money: number = Number(document.getElementById("tip")); 
    // workers[counter++] = new Employee(a,aHour);
    // workers[counter++] = new Employee(b,bHour);
    // workers[counter++] = new Employee(c,cHour);
    // workers[counter++] = new Employee(d,dHour);
    var n = Number(prompt("הכנס את מספר העובדים:"));
    var workers = new Array(n);
    var allDay = 0;
    for (var i = 0; i < n; i++) {
        var name_1 = prompt("הכנס שם עובד: ");
        var hour = Number(prompt(" \u05DB\u05DE\u05D4 \u05E9\u05E2\u05D5\u05EA " + name_1 + " \u05E2\u05D1\u05D3: "));
        workers[i] = new Employee(name_1, hour);
        allDay += hour;
    }
    var money = Number(prompt("מה הטיפ הכללי?"));
    var perHour = money / allDay;
    var minimalPay = 35;
    if (perHour < minimalPay) {
        var rest = minimalPay - perHour;
        document.getElementById("demo").innerHTML += "\u05D8\u05D9\u05E4 \u05E9\u05E2\u05EA\u05D9: " + perHour;
        document.getElementById("demo").innerHTML += "<br>";
        document.getElementById("demo").innerHTML += "\u05D2\u05D5\u05D1\u05D4 \u05D4\u05E9\u05DC\u05DE\u05D4: " + rest;
        document.getElementById("demo").innerHTML += "<br>";
        console.log("Recover salary by: " + rest);
        perHour = 35;
    }
    for (var i = 0; i < n; i++) {
        console.log("setting per hour " + perHour);
        workers[i].setSalary((perHour * workers[i].getHours()));
    }
    // for (let i = 0; i < n; i++) {
    //     console.log(workers[i]);
    //     document.getElementById("demo").innerHTML += `\n ${workers[i]}`;
    // }
    workers.forEach(function (element) {
        document.getElementById("demo").innerHTML += element.toString();
        document.getElementById("demo").innerHTML += "<br>";
    });
}
