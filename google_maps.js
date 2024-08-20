
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function App() {

    const [origin, setOrigin] = React.useState({
        latitude:-33.505992,
        longitude:-70.662441
    });

    return (
        <View style={StyleSheet.container}>
            <MapView
             style={StyleSheet.map}
             initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04
             }}
        >
            <Marker
                draggable
                coordinate={origin}
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
            />
            <Marker
                draggable
                coordinate={destination}
                onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                
            />
            </MapView>
        </View>
    );
}

