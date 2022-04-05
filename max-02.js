//Find largest element of an Array
var ages = [10, 25, 20, 5];
var max = ages[0];
for(var i=0; i<ages.length; i++){
    if(max<ages[i]){
        max = ages[i];
    }
}
console.log("Largest age:",max);