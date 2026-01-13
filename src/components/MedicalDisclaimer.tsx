import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useUserStore } from '../store/useUserStore';
import { theme } from '../theme/theme';

export const MedicalDisclaimer = () => {
  const { hasAcceptedDisclaimer, setHasAcceptedDisclaimer } = useUserStore();

  if (hasAcceptedDisclaimer) return null;

  return (
    <Modal visible={true} animationType="slide" transparent onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Medical Disclaimer</Text>
          <ScrollView style={styles.content}>
            <Text style={styles.text}>
              The content provided in TBI Link, including text, graphics, images, and other material, is for informational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </Text>
            <Text style={styles.text}>
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this app.
            </Text>
            <Text style={styles.text}>
              If you think you may have a medical emergency, call your doctor or 911 immediately. TBI Link does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the app.
            </Text>
            <Text style={styles.text}>
              The SOS feature provides location and medical info sharing but is not a replacement for emergency services. Reliance on any information provided by TBI Link is solely at your own risk.
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setHasAcceptedDisclaimer(true)}
          >
            <Text style={styles.buttonText}>I Understand & Agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: theme.spacing.m,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.l,
    padding: theme.spacing.l,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.m,
    textAlign: 'center',
  },
  content: {
    marginBottom: theme.spacing.m,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
    lineHeight: 24,
    marginBottom: theme.spacing.m,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
