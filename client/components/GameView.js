var React = require('react');
var ReactDOM = require('react-dom');
var StoryTitle = require('./StoryTitle.js');
var StoryBox = require('./StoryBox.js');
var StoryInput = require('./StoryInput.js');

var GameView = React.createClass({
	getInitialState: function ()
		return {
			console.log("in getInitialState");
		};
	},
	render: function() {
		return (
			<div className="GameView">
				<h1>Fwibble!</h1>
				<StoryTitle />
				<StoryBox />
				<StoryInput />
			</div>
		)
	}
});


ReactDOM.render(<GameView />, document.getElementById('app'));

module.exports = GameView;


//OLD WAY OF DOING IT:

// var React = require('react');
// var ReactDOM = require('react-dom');
// var StoryTitle = require('./StoryTitle.js');
// var StoryBox = require('./StoryBox.js');
// var StoryInput = require('./StoryInput.js');

// var GameView = React.createClass({
// 	getInitialState: function () {
// 		return {

// 		};
// 	},
// 	render: function () {
// 		return (
// 			<div className="GameView">
// 				<h1>Fwibble!</h1>
// 				<StoryTitle />
// 				<StoryBox />
// 				<StoryInput />
// 			</div>
// 		)
// 	}
// });


// ReactDOM.render(<GameView />,
// 	document.getElementById('app')
// );

// module.exports = GameView;