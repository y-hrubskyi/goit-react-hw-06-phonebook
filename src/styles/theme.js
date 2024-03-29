export const theme = {
  colors: {
    white: '#fafafa',
    black: '#212112',
    blue: 'blue',
    // green: 'green',
    // red: 'red',
    // orange: 'orange',
    // teal: 'teal',
    // accent: 'purple',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  transition: (prop = '') => `${prop} 250ms linear`,
  spacing: value => `${value * 4}px`,
};
