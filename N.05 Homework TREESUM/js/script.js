let runTreeSum = function() {
	let testArray = [ 5, 7, 
        			    [ 4, [2], 8, [1,3], 2 ], 
        			    [ 9, [] ], 
        			    1, 8
      		        ];
   console.log(treeSum(testArray));
}

let treeSum = function(array) {
	let sum = 0;
	for(let i = 0; i < array.length; i++) {
		if(Array.isArray(array[i])) {
			sum += treeSum(array[i]);
		} else {
			sum += array[i];
		}
	}
	return sum;
}



