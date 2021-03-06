
function Main() {
	'use strict';

	var main = this;

	main.activate = () => setTimeout(activate);

	main.deactivate = () => setTimeout(deactivate);

	main.config = require('./settings.json');

	function activate() {
		require('./register-commands.js').activate();
	}

	function deactivate() {
		require('./register-commands.js').deactivate();
	}

}

module.exports = new Main();
