import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.menuItem}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.menuItemText}>{item.title}</Text>
      </TouchableOpacity>
      {item.submenu && isOpen && (
        <SubMenu items={item.submenu} />
      )}
    </View>
  );
};

const SubMenu = ({ items }) => {
  return (
    <View style={styles.submenu}>
      {items.map((subItem, index) => (
        <TouchableOpacity key={index} onPress={() => {}}>
          <Text style={styles.subMenuItemText}>{subItem.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Menu = ({ items }) => {
  return (
    <View style={styles.menu}>
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'column',
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  submenu: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subMenuItemText: {
    fontSize: 14,
    padding: 10,
  },
});

export default Menu;
