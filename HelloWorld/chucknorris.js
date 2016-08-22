/**
 * Cola Bubble
 */

 import React from 'react';
 var ReactNative = require('react-native');
 var {
   Text,
   View,
 } = ReactNative;
 
 const Chuck = React.createClass({
  render() {
     <View style={{flex: 1, justifyContent:'center'}}>
       <Text style={{fontSize:28, textAlign:'center', color:props.primary, marginBottom: 12}}>
         {'Chuck Norris Joke:'}
       </Text>
       <Text style={{fontSize:16, textAlign:'center', color:props.secondary}}>
         {props.joke}
       </Text>
     </View>
   }
  });

 
 export default Chuck;
