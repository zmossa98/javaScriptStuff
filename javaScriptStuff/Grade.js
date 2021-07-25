Function CalcAver(Array)
{
    let sum=0;
    for(let i of Array)
        sum+=i;
   return  sum/Array.length;
}

function CalculateGrade(marks=[])
{
    
    
   if (average>60)
   console.log('F');
    if(average>=60&&average<=69)
    console.log('D');
if(average>=70&&average<=79)
    console.log('C');
    if(average>=80&&average<=89)
    console.log('B');
     if(average>=90&&average<=100)
    console.log('A');
    if(average>100)
    console.log('A+');
    
    console.log('F');
}

let mark=[100,90,60];
CalculateGrade(mark);