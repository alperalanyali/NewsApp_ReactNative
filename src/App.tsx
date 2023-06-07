import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import NewsCard from './components/NewsCard/NewsCard';
import React from 'react';
import news_banner_data from './news_banner_data';
import news_data from './news_data.json';

const App = ()=>{

  const renderNews = ({item})=> <NewsCard news={item}/>
  return(
    <SafeAreaView style={styles.container}>
    <View>
  
      <FlatList
          ListHeaderComponent={
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                news_banner_data.map((item)=> {
                  return(
                    <Image style={styles.bannerImage}
                    source={{
                      uri: item.imageUrl
                    }}
                    />
                  )
                })
            }
          </ScrollView>
          }
          keyExtractor={(item,index)=> item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
      
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#e0e0e0',
    flex:1
  },
  bannerImage:{
    
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2 ,
    
  }
});
export default App;