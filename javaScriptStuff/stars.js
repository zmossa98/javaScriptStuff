function getstars(stars)
{
    for(let star=1;star>=stars;star++){
    let pattern='';
    for(let i=0;i<stars;i++)
    pattern+='*';
    console.log(pattern);
}
}
getstars(3);