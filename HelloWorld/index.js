/**
 * Cola Bubble
 */

var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
} = ReactNative;
var axios = require('axios');

var Cola = require('cola-api');
var { Bubble } = Cola;

// var Chuck = require('./chucknorris');

const width = Dimensions.get('window').width;

var MyBubble = Bubble.createBubbleClass({
  getInitialState () {
    return {
      joke: ''
    };
  },

  getJoke() {
    var that = this;
    axios.get('http://api.icndb.com/jokes/random')
      .then(function (response) {
        joke = response.data.value.joke;
        that.setState({
          joke: joke
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  buttonClick() {
    this.getJoke()
  },

  componentDidMount: function() {
    Bubble.setSendEnabled(true);
    // http request 
    this.getJoke();
  },

  render: function() {

    var primary, secondary, setUp;
  	if (this.props[Bubble.BUBBLE_MODE] == Bubble.BUBBLE_OUTGOING_MODE) {
      setUp = false;
      primary = secondary = 'white';
    }
    else {
      setUp = true;
      primary = '#525252';
      secondary = '#7B7B7B';
    }

    return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        {setUp ? 
          <TouchableHighlight onPress={this.buttonClick} >
            <Image
              style={{ width: 200, height: 200, marginBottom: 50 }}
              source={{uri:'https://s-media-cache-ak0.pinimg.com/736x/0c/b7/3f/0cb73f580ed858fff4837c90a185f41a.jpg'}} 
            />
          </TouchableHighlight> : null }
        <Text style={{fontSize:28, textAlign:'center', color:primary, marginBottom: 12}}>
          {'Chuck Norris Joke:'}
        </Text>
        <Text style={{fontSize:16, textAlign:'center', color:secondary}}>
          {this.state.joke}
        </Text>
     </View>
    );
  }
});
