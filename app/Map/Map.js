import react, { Component, useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import MapView, {Marker} from 'react-native-maps'
// import Geolocation from '@react-native-community/geolocation'

const Map = ({param, setTitle, goScreen}) => {
    // useEffect(() => {
    //     setTitle('Map')
    // },[])
    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                provider={'google'}
                region={{
                    latitude: 10.77328140472832,
                    longitude: 106.6891522881816,
                    latitudeDelta: 0.025,
                    longitudeDelta: 0.025,
                  }}
                zoomEnabled={true}
                showsUserLocation={true}
                followUserLocation={true}
            >
                    <Marker
                        // key={index}
                        coordinate={{ latitude : 10.77828140472832 , longitude : 106.6891522881816 }}
                        title={'GREEN MOBILE CLASS'}
                        description={'Check Google Map'}
                       // image={{uri: 'https://icon-library.com/images/google-map-pin-icon-png/google-map-pin-icon-png-0.jpg'}}
                    >
                        <Image style={{width: 40, height: 40, resizeMode: 'cover'}} source={{uri: 'https://icon-library.com/images/google-map-pin-icon-png/google-map-pin-icon-png-0.jpg'}}/>
                    </Marker>
            </MapView>
        </View>
    )
}

export default Map