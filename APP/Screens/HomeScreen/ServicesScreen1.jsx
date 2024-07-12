import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Services from '../../../Components/Services';
import client from '../../../sanity';

const ServicesScreen1 = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const query = `*[_type == "service"]{
        _id,
        label,
        iconLib,
        iconName,
        items[]->{_id, name, price}
      }`;
      const data = await client.fetch(query);
      setServicesData(data);
    };

    fetchServices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      {servicesData.length > 0 && (
        <>
          <View style={styles.row}>
            <Services
              iconLib={servicesData[0].iconLib}
              iconName={servicesData[0].iconName}
              label={servicesData[0].label}
              items={servicesData[0].items}
            />
            <Services
              iconLib={servicesData[1].iconLib}
              iconName={servicesData[1].iconName}
              label={servicesData[1].label}
              items={servicesData[1].items}
            />
          </View>
          <View style={styles.row}>
            <Services
              iconLib={servicesData[2].iconLib}
              iconName={servicesData[2].iconName}
              label={servicesData[2].label}
              items={servicesData[2].items}
            />
            <Services
              iconLib={servicesData[3].iconLib}
              iconName={servicesData[3].iconName}
              label={servicesData[3].label}
              items={servicesData[3].items}
            />
          </View>
          <View style={styles.row}>
            <Services
              iconLib={servicesData[4].iconLib}
              iconName={servicesData[4].iconName}
              label={servicesData[4].label}
              items={servicesData[4].items}
            />
            <Services
              iconLib={servicesData[5].iconLib}
              iconName={servicesData[5].iconName}
              label={servicesData[5].label}
              items={servicesData[5].items}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 13,
  }
});

export default ServicesScreen1;
