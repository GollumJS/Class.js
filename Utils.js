GollumJS.Utils = {

	clone: function (value) {

		if (value === null) {
			return null;
		}
		var target = null;
		
		if (typeof (value) == 'object') {
			if (Object.prototype.toString.call( value ) === '[object Array]') {
				target = [];
				for (var k = 0; k < value.length; k++) {
					target[k] = GollumJS.Utils.clone (value[k]);
				}
			} else {
				target = {};
				GollumJS.Utils.extend (target, value);
			}

		} else {
			target = value;
		}
		return target;
	},

	extend: function(destination, source) {
		for (var property in source) {

			if (source[property] == null) {
				if (typeof destination[property] == 'undefined') {
					destination[property] = null;
				}
			} else
			if (typeof (source[property]) == 'object' && Object.prototype.toString.call( source[property] ) !== '[object Array]') {
				if (typeof destination[property] == 'undefined') {
					destination[property] = {};
				}
				GollumJS.Utils.extend (destination[property], source[property]);
			} else {
				destination[property] = GollumJS.Utils.clone(source[property]);
			}
			
		}
		return destination;
	}

};