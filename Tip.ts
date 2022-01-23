class Employee {

    private _name: string;
    private _hours: number;
    private _salary: number;

    public constructor(name: string, hours: number) {
        this._name = name;
        this._hours = hours;
        this._salary = 0;
    }
    setSalary(s:number){
        this._salary = s;
    }

    public getSalary():number{
        return this._salary;
    }


    public getHours(): number {
        return this._hours;
    }

    public getName():string{
        return this._name;
    }


    toString(){
       return `עובד [ שם: ${this._name}, שעות: ${this._hours}, תשלום: ${this._salary}, שעתי: ${(this._salary/this._hours)}]`;
    }

}
 

 function kukula(){
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
    let n:number = Number(prompt("הכנס את מספר העובדים:"));
    let workers:Employee[] = new Array(n);
    let allDay:number = 0;
    for(let i=0; i < n ; i++){
        let name:string = prompt("הכנס שם עובד: ")
        let hour:number = Number(prompt(` כמה שעות ${name} עבד: `))
        workers[i] = new Employee(name,hour);
        allDay += hour;
    }
    let money:number = Number(prompt("מה הטיפ הכללי?"))
    let perHour:number = money/allDay;
    let minimalPay:number = 35;
    if(perHour < minimalPay){
        let rest = minimalPay - perHour;
        document.getElementById("demo").innerHTML += `טיפ שעתי: ${perHour}`;
        document.getElementById("demo").innerHTML += "<br>";
        document.getElementById("demo").innerHTML += `גובה השלמה: ${rest}`;
        document.getElementById("demo").innerHTML += "<br>";
        console.log(`Recover salary by: ${rest}`)
        perHour = 35;
    }
    for(let i = 0; i < n; i++){
        console.log(`setting per hour ${perHour}`);
        workers[i].setSalary((perHour * workers[i].getHours()));
     }
    // for (let i = 0; i < n; i++) {
    //     console.log(workers[i]);
    //     document.getElementById("demo").innerHTML += `\n ${workers[i]}`;
    // }
    workers.forEach(element => {
        document.getElementById("demo").innerHTML += element.toString();
        document.getElementById("demo").innerHTML += "<br>";
    });
 }