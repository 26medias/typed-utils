var _ 		= require('underscore');

module.exports		= {
	min:	function(typedArray) {
		return Math.min.apply(Math, typedArray);
	},
	max:	function(typedArray) {
		return Math.max.apply(Math, typedArray);
	},
	normalize:	function(typedArray, out_min, out_max) {
		// Find the range
		var in_min	= Math.min.apply(Math, typedArray);
		var in_max	= Math.max.apply(Math, typedArray);
		// Normalize
		var i;
		var l = typedArray.length;
		for (i=0;i<l;i++) {
			typedArray[i]	= (typedArray[i] - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		}
		return typedArray;
	},
	pow:	function(typedArray, x) {
		var i;
		var l = typedArray.length;
		for (i=0;i<l;i++) {
			typedArray[i]	= Math.pow(typedArray[i], x);
		}
		return typedArray;
	},
	seed:	function(typedArray) {
		var i;
		var l = typedArray.length;
		for (i=0;i<l;i++) {
			typedArray[i]	= Math.random();
		}
		return typedArray;
	},
	xy:	function(typedArray, x, y, w) {
		var index	= y * w + x;
		return typedArray[index];
	},
	index:	function(x, y, w) {
		return y * w + x;
	}
};