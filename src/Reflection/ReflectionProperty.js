GollumJS.Reflection = GollumJS.Reflection || {};
/**
 *  @author     Damien Duboeuf
 *  @version 	1.0
 */
GollumJS.Reflection.ReflectionProperty = new GollumJS.Class ({
	
	name: null,
	reflectionClass: null,
	comment: null,
	
	annotations: [],
	
	
	initialize: function (reflectionClass, name) {
		this.reflectionClass = reflectionClass;
		this.name            = name;
	},
	
	getDefaultValue: function () {
		return this.reflectionClass.constructor.prototype[this.name];
	},
	
	serialiseInfos: function () {
		return {
			name   : this.name,
			comment: this.comment
		};
	},
	
	unserialiseInfos: function (infos) {
		this.name    = infos.name;
		this.comment = infos.comment;
	}
});
