import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import HeaderStyle2 from '../components/Headers/HeaderStyle2';
import { DrawerLayout } from 'react-native-gesture-handler';
import DrawerMenu from '../layout/DrawerMenu';


export default function Home() {
    const { colors } = useTheme();

    const drawerRef = useRef();

    return (
        <>
            <DrawerLayout
                ref={drawerRef}
                drawerWidth={280}
                drawerPosition={DrawerLayout.positions.Left}
                drawerType="front"
                drawerBackgroundColor="#ddd"
                renderNavigationView={() => <DrawerMenu drawer={drawerRef} />}
            >
                <SafeAreaView style={{ flex: 1, backgroundColor: colors.background2 }}>

                    <HeaderStyle2 drawer={drawerRef} title="Home" />

                    <ScrollView>
                        <View style={[GlobalStyleSheet.container, { paddingBottom: 5 }]}>
                            <Text style={styles.textCenter}>Home - Test API</Text>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </DrawerLayout>
        </>
    );
}

const styles = StyleSheet.create({
    textCenter: {
        textAlign: 'center',
    }
})
