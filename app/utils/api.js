import { AsyncStorage } from 'react-native'
// import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

const DECKLIST_STORAGE_KEY = 'udacicards:decklist'

const dummy_data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

// return all of the decks along with their titles, questions, and answers.
export function getDecks () {
  console.log('fetching decks!!!');
  return AsyncStorage.getItem(DECKLIST_STORAGE_KEY)
    then(results => {
      console.log('deck results...', results)
      return JSON.parse(results)
    })
}

 // take in a single id argument and return the deck associated with that id.
export function getDeck (deck_id) {
  console.log('fetching individual deck with ID...', deck_id);
}

// take in a single title argument and add it to the decks
export function saveDeckTitle (title) {
  console.log('creating new deck with title...', title);

}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck (title, card) {
  console.log('creating new card in deck with ID...', deck_id);
}

// export function fetchCalendarResults () {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then(formatCalendarResults)
// }

// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }