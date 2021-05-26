import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have { this.context.currentFriends.length } movies!</Text>

        <Button
          title="Add some movies"
          onPress={() =>
            this.props.navigation.navigate('Movies')
          }
        />
      </View>
    );
  }
}
HomeScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;
