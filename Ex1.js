var count = 8;
while(count < 8){
    console.log("Inside loop");
}

do{
    console.log("Inside do- while loop");
}while(count <8)


//for("init"; "cond"; "incr/decr state")

for(let i = 10; i>0 ; i--)
{
    console.log(i);
}

//break
for(let i = 10; i>0 ; i--)
{
    console.log(i);
    break;
}

for(let i = 10; i>0 ; i--)
{
    console.log(i);
    if(i === 5){
    break;
    }
    
}

while(count >5)
{
    for(let i=10; i>0 ; i--)
    {
        console.log("i = " +i);
        if(i == 8){
            break;
        }
    }
    count--;
    break;
}