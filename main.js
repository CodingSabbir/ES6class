class name{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const myName1= new name('sabbir',22);
const myName2= new name('sohan',20);
document.querySelector('#demo').innerHTML=myName1.name + " " +myName1.age