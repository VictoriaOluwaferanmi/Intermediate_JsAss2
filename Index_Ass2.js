let musicians=2;

if(musicians==4){
    console.log('"quartet"');
}
    else if (musicians==3){
        console.log('"trio"');
    }
else if (musicians==2){
    console.log('"duet"');
}
else if (musicians <=0){
     console.log('"Not a group"'); 
}
else if(musicians > 4){
    console.log('"This is a large group"');
}
else{
    console.log('"Invalid number"')
}