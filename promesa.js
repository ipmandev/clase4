const sumar=(a,b)=>{
return new Promise((resolve, reject) => {
     if(a<0|| b<0){
        reject("no es valido");
     }else{
        resolve(a+b);
     }
} );
};

const resultado =  sumar(1,4529)
.then (( res)=>{
    document.write (res);
})
.catch((error)=>{
    document.write(error);
});
