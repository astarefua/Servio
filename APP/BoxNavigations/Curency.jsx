// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// import axios from 'axios';
// import { getLatestRates } from '../Firebase/CurrencyServices';

// export default function Curency() {
//   const [amount, setAmount] = useState('');
//   const [baseCurrency, setBaseCurrency] = useState('');
//   const [quoteCurrency, setQuoteCurrency] = useState('');
//   const [result, setResult] = useState('');
//   const [currencies, setCurrencies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCurrencies();
//   }, []);

//   const fetchCurrencies = async () => {
//     try {
//       const response = await axios.get('https://restcountries.com/v3.1/all');
//       const currencyData = response.data
//         .map(country => {
//           const currencyCode = country.currencies ? Object.keys(country.currencies)[0] : undefined;
//           if (currencyCode) {
//             return {
//               label: `${country.flags?.png} ${country.currencies[currencyCode]?.name} (${currencyCode})`,
//               value: currencyCode,
//               flag: country.flags?.png,
//             };
//           }
//           return null;
//         })
//         .filter(item => item !== null);
//       setCurrencies(currencyData);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   const convertCurrency = async () => {
//     try {
//       const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
//       const rate = response.data.rates[quoteCurrency];
//       const convertedAmount = (parseFloat(amount) * rate).toFixed(2);
//       setResult(`${amount} ${baseCurrency} = ${convertedAmount} ${quoteCurrency}`);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Convert <Text style={{color: 'green'}}>$</Text></Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Amount"
//         keyboardType="numeric"
//         value={amount}
//         onChangeText={setAmount}
//       />
//       <Text style={styles.label}>Base Currency</Text>
//       <RNPickerSelect
//         onValueChange={(value) => setBaseCurrency(value)}
//         items={currencies}
//         style={pickerSelectStyles}
//         placeholder={{ label: 'Select Base Currency', value: null }}
//       />
//       <Text style={styles.label}>Quote Currency</Text>
//       <RNPickerSelect
//         onValueChange={(value) => setQuoteCurrency(value)}
//         items={currencies}
//         style={pickerSelectStyles}
//         placeholder={{ label: 'Select Quote Currency', value: null }}
//       />
//       <TouchableOpacity style={styles.button} onPress={convertCurrency}>
//         <Text style={styles.buttonText}>Convert <Text style={{color: 'green'}}>$</Text></Text>
//       </TouchableOpacity>
//       {result && <Text style={styles.result}>{result}</Text>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   button: {
//     // backgroundColor: '#4CAF50',
//     backgroundColor:'green',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//     height:50
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   result: {
//     marginTop: 20,
//     fontSize: 18,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   inputAndroid: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#F5F5F5',
//   },
// });




import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { getLatestRates } from "../Firebase/CurrencyServices";

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("GHS");
  const [amount, setAmount] = useState("1");
  const [conversionRate, setConversionRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConversionRate();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    fetchCurrencyOptions();
  }, []);

  const fetchConversionRate = async () => {
    try {
      const data = await getLatestRates(baseCurrency);
      setConversionRate(data.conversion_rates[targetCurrency]);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error getting latest conversion rate, please try again later",
        error
      );
    }
  };

  const fetchCurrencyOptions = async () => {
    try {
      const data = await getLatestRates("USD");
      const options = Object.keys(data.conversion_rates).map((key) => ({
        label: `${data.flags[key]} ${key}`,
        value: key,
      }));
      setCurrencyOptions(options);
    } catch (error) {
      console.error("Error getting currency options. Please try again", error);
    }
  };

  const handleConvert = () => {
    const amountFloat = parseFloat(amount);
    if (isNaN(amountFloat) || !conversionRate) {
      setConvertedAmount(null);
      return;
    }
    const result = (amountFloat * conversionRate).toFixed(2);
    const formattedResult = new Intl.NumberFormat().format(result);
    setConvertedAmount(formattedResult);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Convert <Text style={{ color: "green" }}>$</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Text style={styles.label}>Base Currency</Text>
      <RNPickerSelect
        onValueChange={(value) => setBaseCurrency(value)}
        items={currencyOptions}
        style={pickerSelectStyles}
        placeholder={{ label: "Select Base Currency", value: null }}
        value={baseCurrency}
      />
      <Text style={styles.label}>Quote Currency</Text>
      <RNPickerSelect
        onValueChange={(value) => setTargetCurrency(value)}
        items={currencyOptions}
        style={pickerSelectStyles}
        placeholder={{ label: "Select Quote Currency", value: null }}
        value={targetCurrency}
      />
      <TouchableOpacity style={styles.button} onPress={handleConvert}>
        <Text style={styles.buttonText}>
          Convert <Text style={{ color: "green" }}>$</Text>
        </Text>
      </TouchableOpacity>
      {convertedAmount && <Text style={styles.result}>{convertedAmount}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
  },
  inputAndroid: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
  },
});

export default CurrencyConverter;
