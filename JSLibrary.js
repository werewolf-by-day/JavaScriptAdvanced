var _ = {

   map: function(array, callback) {
   	//transformative funct
     for(var i = 0; i < array.length; i++) {
     	array[i] = callback(array[i]);
     }
   },

   reduce: function(array, callback, memo) { 
   	//groups each element of arrary together
     var start = 0;
     if(!memo) {
     	memo = array[0];
     	start = 1;
     }
     for(var i = start; i < array.length; i++) {
     	memo = callback(array[i], memo);
     }
     return memo;
   },

   find: function(array, callback) {   
   	//search
     for(var i = 0; i < array.length; i++) {
     	if(callback(array[i])) {
     		return array[i];
     	}
     }
   },

   filter: function(array, callback) { 
   	//filter to include
     var tempArray = [];
     for(var i = 0; i < array.length; i++) {
     	if(callback(array[i])){
     		tempArray.push(array[i]);
     	}
     }
     return tempArray;
   },

   reject: function(array, callback) { 
   	//filter out
     var tempArray = [];
     for(var i = 0; i < array.length; i++) {
     	if(!callback(array[i])){
     		tempArray.push(array[i]);
     	}
     }
     return tempArray;
   }
// JavaScript library with 5 methods!
}

var array = [2, 4, 5, 6, 8, 14, 18];
console.log(array);
_.map(array, function callback(x){return x *5;});
console.log(array);
console.log(_.reduce(array, function callback(x, memo){return x + memo;}));
console.log(_.find(array, function callback(x) {return x == 30;}));
console.log(_.filter(array, function callback(x){return x > 30;}));
console.log(_.reject(array, function callback(x){return x > 30;}));
