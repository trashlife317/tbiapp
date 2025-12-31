// TBI Link - Theme
// Based on README.md description: Sunrise gradients (peach, teal, warm gold)

export const theme = {
  colors: {
    primary: '#FFAB91', // Peach
    secondary: '#80CBC4', // Teal
    peach: '#FFAB91',
    teal: '#80CBC4',
    gold: '#FFE082',
    background: '#FFF8E1', // Warm white/cream
    text: {
      primary: '#3E2723',
      secondary: '#5D4037',
      light: '#D7CCC8',
    },
    ui: {
      card: '#FFFFFF',
      border: '#EFEBE9',
    },
    status: {
      success: '#81C784',
      error: '#E57373',
      warning: '#FFB74D',
    }
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  borderRadius: {
    s: 8,
    m: 16,
    l: 24,
    round: 9999,
  },
  typography: {
    h1: { fontSize: 32, fontWeight: 'bold' as const },
    h2: { fontSize: 24, fontWeight: 'bold' as const },
    body: { fontSize: 16 },
    caption: { fontSize: 12 },
  }
};
