import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface DropdownMenuProps {
  options: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(''); 

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option: string) => { 
    setSelectedOption(option);
    setIsDropdownVisible(false);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={toggleDropdown}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            {selectedOption || 'Selecciona una opción'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {options.map((option, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handleOptionSelect(option)}
            >
              <View style={styles.option}>
                <Text>{option}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default DropdownMenu;
