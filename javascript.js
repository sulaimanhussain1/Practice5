

// Complete javascript and Advance javascript file ....

// console.log("This is practice file.");

// declaration variable name 

// var myName = "Sulaiman Hussian";
// console.log(myName);

// data type in javascript 

// const a;
// console.log("one ===> ", a)
// a=10;
// console.log("two ===> ", a)

// var names = "sulaiman";
// console.log(names);

// function Person(first , last , age , eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColour = eye;
//     this.nationality = "English";
// }

// var myFather = new Person("Mr" , "Abbasi" , 50 , "Blue");
// var myMother = new Person("Mrs" , "Abbasi" , 48 , "green");
// console.log(myFather.lastName);
// console.log(myMother.eyeColour);

// let a_ = ("one" === "One");
// console.log(a_);

// const a = 3 ;
// const b = -2 ;
// console.log( a > 0 && b > 0);
// console.log( a > 0 || b > 0);
// console.log(!( a > 0 || b > 0));

// if(true){
//     var userName ="Ali";
//     console.log(userName);
//     let age = 20;
//     console.log(age);
//     const skills = "javascript";
//     console.log(skills);
// }

// console.log(userName);
// console.log(age);
// console.log(skills);

// let a = "user1";
// const func = () => {
//     b = "user2";
//     var c = "User3";
// }
// func();

// const o = {p:42 , q:true};
// const {p:foo , q:bar} = o;
// console.log(foo);
// console.log(bar);

// var userName = "ali";
// function ShowUserName(){
//     var userName = "Daniyal";
//     alert(username);  // Daniyal
// }

// ShowUserName();
// alert(userName);



// var company = {name:'panacloud' , employee:200};
// var txt;
// for (i  in company){
//     txt += company[i] + ' ';
// }
// console.log(txt);

// [x , y , ...restof] = [10,20,30,40,50];
// console.log(restof);

// class Parent {
//     constructor(age){
//         this.age = age;
//     }
// }

// class Child1 extends Parent{
//     constructor(age){
//         super(age)
//     }
// }

// var _child1 = new Child1(6956)
// console.log(_child1)


// function calculator(){
//     let total = Number()
//     function add(a,b){
//         total += a+b;
//         console.log(total);
//     }
//     function sub(a,b){
//         total += a-b;
//         console.log(total);
//     }
//     function mul(a,b){
//         total += a*b;
//         console.log(total);
//     }
//     function div(a,b){
//         total += a/b;
//         console.log(total);
//     }
//     return{
//         add,
//         sub,
//         mul,
//         div,
//     }
// }

// let calc = calculator()
// calc.add(2,2)
// calc.sub(1,5)
// calc.mul(2,15)
// calc.mul(2,2)
// calc.div(2,2)

// let obj1 = {key1:"value1" , key2:"value2"};
// let obj2 = {key3:"value3"};
// let obj3 = {key4: "value4" , obj2, ...obj1};
// console.log(obj3);

// function multiplier (factor,number = 2 ){
//     return number => number * factor;
// }
// let twice = multiplier(2,3);
// console.log(twice(5));

// document.addEventListener("click" , function(){
//     console.log('this ==>' , this);
// })


// const a = 'hello';
// const b = 'world';

// console.log( a + "from " + b);
// console.log  ( $(a) from $(b));
// console.log( a + b );


const array1 = ["a" , "b" , "c"];
for (const element of array1 ){
    console.log(element);
}