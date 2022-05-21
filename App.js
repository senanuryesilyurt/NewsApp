import React from 'react';
import {View, Text, FlatList, ScrollView, Image} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import {StyleSheet, Dimensions} from 'react-native';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyNews = (item, index) => item.u_id.toString(); // u_id(varsayılandan farklı adlandırma ,default:id) yerine id isimlendirmesi kullanılsaydı buna gerek yoktu.

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                key={bannerNews.id}
                styles={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        }
        keyExtractor={keyNews}
        data={news_data}
        renderItem={renderNews}>
        {}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  headerText: {
    margin: 10,
    color: 'slategray',
    fontWeight: 'bold',
    fontSize: 50,
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default App;
