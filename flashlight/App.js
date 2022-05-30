import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);
  
  useEffect(() => {
    // liga o flash do celular
    Torch.switchState(toggle);
  }, [toggle]);
    

  useEffect(() => {
    const subscription = RNShake.addListener(() =>{
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();

  }, []);

  return ( 
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity  onPress={handleChangeToggle}>
        <Image 
         style={toggle ? style.LightinOn : style.LightinOff}
          source={toggle 
            ? require("./assets/icons/LigthOn.png")
            : require("./assets/icons/LigthOff.png")
        }
      />
      <Image 
         style={style.dioLogo}
         source={
           toggle 
           ? require("./assets/icons/LogoDio.png")
           : require("./assets/icons/LogoWhite.png")
           }/>
          </TouchableOpacity>
        </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightinOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  LightinOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});

