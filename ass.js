
function cubeNumber(number){
    if(typeof number!=="number"){
        return "Enter a number"
    }
    else{
    var cubregalt = number*number*number
    return cubregalt;
}
}

function matchFinder(string1, string2) {
    if(typeof string1!=="string" ||typeof string2!=="string"){
        return"Please give two Sting Velu"
    }
    else{
        if(string1.includes(string2)){
            return true
        }
        else{
            return false
        }
    }
}

function sortMaker(arr) {
    if (arr[0]< 0 || arr[1]< 0){
       return  "Invalid Input"
    }
    else if(arr[0] === arr[1]){
      return"equal"
    }
   else{
    if (arr[0] < arr[1]){ 
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp; 
    }
    return arr;
  }
  }
  
function findAddress(person){
    const street = person.street || "__";
    const house = person.house || "__";
    const societ = person.society || "__";
    return street+" "+house+" "+societ;
}

function canPay(changeArrayr,totalDue){
    if(changeArrayr.length === 0){
      return "No money ,please pay"
    }
    else{
      let sum =0 ;
      for(let i=0; i<changeArrayr.length;i++){
          sum=sum+changeArrayr[i]
      }
      if( sum>totalDue){
          return true
      }
      else{
       return false
      }
  }
  }