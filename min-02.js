//Find smallest element of an Array
var ages = [10, 25, 20, 5];
var min = ages[0];
for(var i=0; i<ages.length; i++){
    if(min>ages[i]){
        min = ages[i];
    }
}
console.log("Smallest age:",min);