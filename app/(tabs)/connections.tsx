import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Alert } from 'react-native';
import { theme } from '../../src/theme/theme';
import { Avatar } from '../../src/components/ui/Avatar';
import { Card } from '../../src/components/ui/Card';
import { Button } from '../../src/components/ui/Button';
import { useConnectionsStore } from '../../src/store/useConnectionsStore';
import { formatRelativeTime } from '../../src/utils/helpers';
import { FontAwesome } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function ConnectionsScreen() {
  const connections = useConnectionsStore(state => state.connections);
  const addConnection = useConnectionsStore(state => state.addConnection);
  const [isScanning, setIsScanning] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const handleScan = () => {
    if (!permission) {
      // Permissions are still loading
      return;
    }
    if (!permission.granted) {
      requestPermission();
      return;
    }
    setIsScanning(true);
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setIsScanning(false);
    // Mock parsing the data
    const newConnection = {
      id: Math.random().toString(36).substr(2, 9),
      name: `User ${data.substring(0, 4)}`,
      status: 'online' as const,
      lastSeen: Date.now()
    };
    addConnection(newConnection);
    Alert.alert("Connected!", `You have added ${newConnection.name} to your circle.`);
  };

  return (
    <View style={styles.container}>
      <Modal visible={isScanning} animationType="slide">
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            onBarcodeScanned={handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setIsScanning(false)}>
            <FontAwesome name="close" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.cameraText}>Scan a friend's QR code to connect</Text>
        </View>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.title}>My Circle</Text>
        <Button
          title="Scan QR"
          size="s"
          onPress={handleScan}
          icon={<FontAwesome name="qrcode" size={16} color="#fff" />}
        />
      </View>

      <FlatList
        data={connections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.row}>
              <Avatar size={60} showHeartbeat={item.status === 'online'} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={[
                  styles.status,
                  { color: item.status === 'online' ? theme.colors.status.success : theme.colors.text.light }
                ]}>
                  {item.status === 'online' ? 'Active now' : `Seen ${formatRelativeTime(item.lastSeen)}`}
                </Text>
              </View>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="heart-o" size={24} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  status: {
    fontSize: 14,
    marginTop: 4,
  },
  actionButton: {
    padding: 8,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
  },
  cameraText: {
    position: 'absolute',
    bottom: 50,
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 8,
  },
});
