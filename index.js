const outPut = document.querySelector('#value');

const display =(num)=>{
    outPut.value += num;
}
const dele=()=>{
    outPut.value = outPut.value.slice(0, -1);
}
const clr=()=>{
    outPut.value = '';
}
const result=()=>{
    try{
        outPut.value = eval(outPut.value);
    }
    catch(err){
        outPut.value = 'invalid error';
    }
}
const calSin=()=>{
    outPut.value = Math.sin(eval(outPut.value));
}
const calCos=()=>{
    outPut.value = Math.cos(eval(outPut.value));
}
const calTan=()=>{
    outPut.value = Math.tan(eval(outPut.value));
}
const calPi=()=>{
    outPut.value = Math.PI;
}