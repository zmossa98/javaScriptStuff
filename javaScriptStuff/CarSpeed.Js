//speed limit 70 >>>ok
// every 5 km point +1
//if points=>12 suspend licenza
//Math.floor()
function checkspeed(speed)
{
    const speedlimit=70;
   const kmperpoint=5;
    if (speed<speedlimit+kmperpoint)
        console.log('Ok')
    else{
    const points=Math.floor((speed-speedlimit)/kmperpoint);
    if(points>=12)
    console.log('suspended');
    else
    console.log(points);
    }
  /* let counter;
    let point=0;
    if (speed <=70)
     console.log('OK');
    else if (speed>=75)
    {counter=speed
        while(counter<=speed)
        {
            point+=1;
            counter+=5;
        } 
        if (point<12)
        console.log(point)  ;
        else
        console.log('Licesnce Suspemded');
    }*/

}
checkspeed(180);