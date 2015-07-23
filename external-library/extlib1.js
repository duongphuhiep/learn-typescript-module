/**
 * Example of a external library
 */
extlib1 = {

	normalize: function (name) {
		return "* " + name.toUpperCase()+" *";
	},

	printHello: function (name) {
		greet.innerText = "Hello "+name;
	}
};
