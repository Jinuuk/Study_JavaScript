function fnc(){
  return 123
}

function vat(money){
  var num = (money*1.1).toFixed(1);
  return parseFloat(num);
}

console.log(vat(88888));

//Q1
function ms(min,sec){
  return (min*60+sec)*1000
}

console.log(ms(1,30));
console.log(ms(2,10));

//Q2
function salePrice(price,first){
  let result = 0;
  if(first){
    result = price*0.9 - 1.5;
  } else{
    result = price*0.9;
  }
  return parseFloat(result.toFixed(1));
}

console.log(salePrice(70, false))
console.log(salePrice(10, true))