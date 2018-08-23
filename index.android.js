import  React from 'react';
import { Text,AppRegistry,Button,View }  from 'react-native' ;

const geraNumAleratorio = () => {
  //alert("Text")
  var numero_aleatorio = Math.floor((Math.random())*10);
  alert(numero_aleatorio);
}
//Arrou finctions
const App = () => {

  return (
    //Elemento principal de uma tela
    <View>
      <Text> Gerador de numeros randomicos</Text>
      <Button 
        title = "Gerar um numero randomico"
        onPress = {geraNumAleratorio}
      />
    </View>
  );
};
//arrow functio 
AppRegistry.registerComponent('randomize', () => App );
