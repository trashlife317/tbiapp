import React from 'react';
import { TextInput, TextInputProps, StyleSheet, View, Text } from 'react-native';
import { theme } from '../../theme/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, style, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null,
          style
        ]}
        placeholderTextColor={theme.colors.text.light}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.m,
  },
  label: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    marginBottom: 4,
    fontWeight: '500',
  },
  input: {
    backgroundColor: theme.colors.ui.card,
    borderWidth: 1,
    borderColor: theme.colors.ui.border,
    borderRadius: theme.borderRadius.s,
    padding: 12,
    fontSize: 16,
    color: theme.colors.text.primary,
  },
  inputError: {
    borderColor: theme.colors.status.error,
  },
  error: {
    fontSize: 12,
    color: theme.colors.status.error,
    marginTop: 4,
  },
});
