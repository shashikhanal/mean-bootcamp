// a JavaScript program to find the most frequent item of an array.

// Sample array : 
var arr1 = [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ];

// Sample Output : a ( 5 times )

var length = arr1.length;

var counter = function(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
        	a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    
    var max = Math.max.apply(Math, b);
    return a[b.indexOf(max)];
}

console.log(counter(arr1));