let number = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]


function convertToRoman(num) {
   let i=12;
   let strNumber =''
  while(num > 0){
    let divisao = Math.floor(num/number[i]);
    num = num%number[i];
    while(divisao--)
    {
        strNumber +=sym[i];
    }
    i--;
    }
  

console.log(strNumber)


 return strNumber;
}

convertToRoman(36);