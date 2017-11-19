import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class AccordionItem extends Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { question } = this.props;
    const { open } = this.state;

    return (
      <View style={{ margin: 10 }}>
        <TouchableOpacity
          style={styles.accordion_row}
          onPress={this.toggleOpen}
        >
          <Ionicons
            name={'md-arrow-dropdown'}
            size={32}
            style={styles.icon_button}
          />
          <Text style={styles.question_text}>Q: {question.question}</Text>
        </TouchableOpacity>
        {open && <Text style={styles.answer_text}>{question.answer}</Text>}
      </View>
    );
  }
}

//  ☐ displays an option to start a quiz on this specific deck
//  ☐ An option to add a new question to the deck
class DeckScreen extends Component {
  render() {
    const { deck, deck_key, navigation } = this.props;
    // const QuestionItem = ({ item: question }) => <AccordionItem question={question} />

    return (
      <View style={styles.container}>
        <Text style={styles.header_text}>{deck.title}</Text>
        <Text style={styles.header_sub}>
          {`${deck.questions.length} questions`}
        </Text>
        <FlatList
          data={deck.questions.map((question, index) => ({
            ...question,
            key: index
          }))}
          renderItem={({ item: question }) => (
            <AccordionItem question={question} />
          )}
          style={styles.list_container}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('QuizScreen', { deck_key })}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Quiz me.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  header_text: {
    fontSize: 20,
    fontWeight: '600'
  },
  header_sub: {
    fontSize: 16,
    marginBottom: 10
  },
  question_text: {
    fontSize: 18
  },
  answer_text: {
    fontSize: 16,
    fontStyle: 'italic',
    marginLeft: 20
  },
  accordion_row: {
    flex: 1,
    flexDirection: 'row'
  },
  icon_button: {
    // padding: 5,
    marginRight: 10
  },
  list_container: {
    paddingBottom: 30
  },
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2
    }
  }),
  text: Platform.select({
    ios: {
      // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
      color: '#007AFF',
      textAlign: 'center',
      padding: 8,
      fontSize: 18
    },
    android: {
      color: 'white',
      textAlign: 'center',
      padding: 8,
      fontWeight: '500'
    }
  })
});

const mapStateToProps = (state, props) => {
  const { deck_key } = props.navigation.state.params;

  return {
    deck_key,
    deck: state.decks[deck_key]
  };
};

export default connect(mapStateToProps, null)(DeckScreen);
