var now_value = '';
var Cal_value = '';
var show_value = [];
function addNum(x){
    //console.log(x);
    now_value = now_value + x;

    document.getElementById("now_value").innerHTML = now_value;
    
}
function Del(){
    now_value = now_value.slice(0,-1);
    console.log(now_value);
    document.getElementById("now_value").innerHTML = now_value;
}
function operator(x){
    switch(x){
        case 'plus':
            Cal_value = plus(Cal_value,now_value);

            show_value = show_value + now_value + ' + ';
            break;
        case 'minus':
            Cal_value = minus(Cal_value,now_value);
            //show_value.push((now_value + ' - '));
            show_value = show_value + now_value + ' - ';
            break;
        case 'multiple':
            Cal_value = mutiple(Cal_value,now_value);
            //show_value.push((now_value + ' x '));
            show_value = show_value + now_value + ' x '
            break;
        case 'clearAll':
            clearAll();
            break;
        case 'clearE':
            clearE();
            break;

        case 'Equal':

            break;
    }
    console.log('show is ' + now_value)
    now_value = '';
    
    document.getElementById("last_value").innerHTML = show_value;
    document.getElementById("now_value").innerHTML = now_value;
}





function plus(num1,num2){
    result =  Number(Number(num1) + Number(num2));
    //console.log(result);
    return result;
}
function minus(num1,num2){
    return Number(Number(num1) - Number(num2));
}
function mutiple(num1,num2){
    return Number(Number(num1) * Number(num2));
}
function negate(){
    var check = now_value.slice(0,1);
    console.log('check is '+ check);
    if (check != '-'){
        now_value = '-' + now_value;

    }else{
        console.log('minus')
        now_value = now_value.slice(1);

    }

    document.getElementById("now_value").innerHTML = now_value;
}
function clearAll(){
    past_value = '';
    now_value = '';
    show_value ='';
    Cal_value ='';
    document.getElementById("last_value").innerHTML = show_value;
    document.getElementById("now_value").innerHTML = now_value;
}
function clearE(){
    now_value = '';
    document.getElementById("last_value").innerHTML = show_value;
    document.getElementById("now_value").innerHTML = now_value;
}
function Equal(){
    //console.log(show_value.slice(-2));
    let op = show_value.slice(-2);
    switch(op){
        case '+ ':
            Cal_value = plus(Cal_value,now_value);

            show_value = show_value + now_value + ' + ';
            break;
        case '- ':
            Cal_value = minus(Cal_value,now_value);
            //show_value.push((now_value + ' - '));
            show_value = show_value + now_value + ' - ';
            break;
        case 'x ':
            Cal_value = mutiple(Cal_value,now_value);
            //show_value.push((now_value + ' x '));
            show_value = show_value + now_value + ' x '
            break;

    }
    show_value = Cal_value;
    now_value = '';
    document.getElementById("last_value").innerHTML = '';
    document.getElementById("now_value").innerHTML = Cal_value;
    console.log(show_value);


}








