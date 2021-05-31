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
    //console.log(now_value);
    document.getElementById("now_value").innerHTML = now_value;
}
function operator(x){
    switch(x){
        case 'plus':
            //Cal_value = plus(Cal_value,now_value);
            
            //show_value = show_value + now_value + ' + ';
            //show_value = show_value + now_value + ' + ';
            show_value = show_value +  ' + ';
            Cal_value = now_value;
            break;
        case 'minus':
            //Cal_value = minus(Cal_value,now_value);
            //show_value.push((now_value + ' - '));
            show_value = show_value +  ' - ';
            Cal_value = now_value;
            
            break;
        case 'multiple':
            if (Cal_value == 0){
                Cal_value = 1;
            }
            Cal_value = now_value;
            show_value = show_value +  ' x ';
            break;
        case 'divine':
            console.log('divine');
            Cal_value = now_value;
            console.log('cal value:' + Cal_value);
            show_value = show_value +  ' / ';
            break;
        case 'clearAll':
            clearAll();
            break;
        case 'clearE':
            clearE();
            break;
    }

    //console.log('show is ' + now_value)
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
    return Number(num1) * Number(num2);
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
    //console.log('slice :' + show_value.slice(-2));
    let op = show_value.slice(-2);
    //console.log('Cal : '+ Cal_value);
    //console.log('now : '+ now_value);
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
            Cal_value = Cal_value * now_value;
            console.log('Cal_value:' + Cal_value)
            show_value = show_value + now_value + ' x ';
            break;
        case '/ ':
            Cal_value = Number(Cal_value)/Number(now_value);
            console.log('Cal_value equal:' + Cal_value)
            show_value = show_value + now_value + ' / ';
            break;            

    }
    show_value = Cal_value;
    
    now_value = Cal_value;
    document.getElementById("last_value").innerHTML = '';
    document.getElementById("now_value").innerHTML = Cal_value;
    console.log(show_value);

}
function showAll(){
    console.log('Cal value :'+Cal_value);
    console.log('Show value :'+show_value);
    console.log('Now value : '+now_value);

}
function dot(){
   if (now_value.indexOf('.') == -1){
       now_value = now_value + '.';

   }
   document.getElementById("now_value").innerHTML = now_value;
}







