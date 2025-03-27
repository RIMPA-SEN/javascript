//for loop

let sum=0;
for(let i=0;i<=10;i++)
{
    console.log(i);
    sum=sum+i;
}
console.log("sum=",sum);

//break and continue
for(let num=0;num<=10; num++)
{
    if(num==5)
        break;
    //continue;
    console.log(num);
}




//while loop

let i=0;
while(i<=10)
{
    console.log("Rimpa");
    i++;
}
    

//do while

do {
    console.log(i);
    i++;
}while(i<=10);


//for-of loop
let str = "Rimpa";
for(let i of str){
    console.log(i);
}
    

//for-in loop
let Student={
    fullName:"Anil",
    marks:99,
    age:27,
};
for(let i in Student)
{
    console.log(i);
    console.log(Student[i]);
}
