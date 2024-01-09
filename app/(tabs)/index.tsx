import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { SetStateAction, useState } from 'react';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  const [openState, setOpenState] = useState(false);
  const [openCities, setOpenCities] = useState(false);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [states, setStates] = useState([
    {label: 'Acre', value: 'acre'},
    {label: 'Alagoas', value: 'alagoas'},
    {label: 'Amapá', value: 'amapá'},
    {label: 'Amazonas', value: 'amazonas'},
    {label: 'Bahia', value: 'bahia'},
    {label: 'Ceará', value: 'ceará'},
    {label: 'Distrito Federal', value: 'distrito federal'},
    {label: 'Espírito Santo', value: 'espirito santo'},
    {label: 'Goiás', value: 'goiás'},
    {label: 'Maranhão', value: 'maranhão'},
    {label: 'Mato Grosso', value: 'mato grosso'},
    {label: 'Mato Grosso do Sul', value: 'mato grosso do sul'},
    {label: 'Minas Gerais', value: 'minas gerais'},
    {label: 'Pará', value: 'pará'},
    {label: 'Paraíba', value: 'paraíba'},
    {label: 'Paraná', value: 'paraná'},
    {label: 'Pernambuco', value: 'pernambuco'},
    {label: 'Piauí', value: 'piauí'},
    {label: 'Rio de Janeiro', value: 'rio de janeiro'},
    {label: 'Rio Grande do Norte', value: 'rio grande do norte'},
    {label: 'Rio Grande do Sul', value: 'rio grande do sul'},
    {label: 'Rondônia', value: 'rondônia'},
    {label: 'Roraima', value: 'roraima'},
    {label: 'Santa Catarina', value: 'santa catarina'},
    {label: 'São Paulo', value: 'sao paulo'},
    {label: 'Sergipe', value: 'sergipe'},
    {label: 'Tocantins', value: 'tocantins'}
  ]);
  const [cities, setCities] = useState([
    {label: 'Belo Horizonte', value: 'belo horizonte'},
    {label: 'Contagem', value: 'contagem'}
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eleições 2024</Text>
      <View style={styles.separator} lightColor="#eeeeee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Informe sua localização:</Text>
      <View style={styles.location}>
      <Text>Estado:</Text>
      <DropDownPicker
       key={'one'}
        listMode="MODAL"
        open={openState}
        value={state}
        items={states}
        setOpen={setOpenState}
        setValue={setState}
        setItems={setStates}
      />
      <Text>Município:</Text>
      <DropDownPicker
        key={'two'}
        listMode="MODAL"
        open={openCities}
        value={city}
        items={cities}
        setOpen={setOpenCities}
        setValue={setCity}
        setItems={setCities}
      />
      
      <Text style={styles.button}>
      <Link href="/two">
        Localizar
      </Link>
      </Text>
      
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  location: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 300
  },
  button: {
    color: '#eee',
    padding: 15,
    backgroundColor: '#1e298e',
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 40,
    marginLeft: '35%',
    borderRadius: 10,
    shadowColor: '#eee',
    // shadowOffset: 0 2,
    shadowOpacity: 0.25,
    elevation: 5,
    alignItems: 'center'    
  }
});
