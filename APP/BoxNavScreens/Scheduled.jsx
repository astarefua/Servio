import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Make sure to install @react-native-community/datetimepicker

const Scheduled = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [text, setText] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textInput}
        placeholder="To:Type names or phone numbers"
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateTimeContainer}>
        <Text style={styles.dateTimeText}>Date: {date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.dateTimeContainer}>
        <Text style={styles.dateTimeText}>Time: {time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}
      <TextInput
        style={styles.textArea}
        placeholder="Start typing here..."
        multiline
        numberOfLines={4}
        onChangeText={text => setText(text)}
        value={text}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Schedule</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  dateTimeContainer: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  dateTimeText: {
    fontSize: 16,
  },
  textArea: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
    paddingHorizontal: 8,
    paddingVertical: 8,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 8,
    marginTop:20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default  Scheduled;


































































































































































































































































































































