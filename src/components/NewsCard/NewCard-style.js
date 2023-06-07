import {Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({

container:{
    backgroundColor:'white',
    margin:10,
    borderRadius:10
    
},
image:{
  height:Dimensions.get('window').height / 4,  
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
},
title:{

  fontSize:16,
  fontWeight:'900',
  marginBottom:5
},
description:{

},
inner_container:{
    padding:10
},
author:{
    fontStyle:'italic',
    textAlign:'right',
    marginBottom:5,
    marginRight:5

}
    
});