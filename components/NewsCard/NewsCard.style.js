import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  inner_container: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  description: {
    marginTop: 5,
  },
  footnote: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
