import { css, space, ThemeConfig } from 'bumbag'

const theme: ThemeConfig = {
  global: {
    fontSize: 16,
    styles: {
      base: css`
        html,
        body {
          background-color: #f7f7fa;
        }
        .DayPickerInput {
          width: 100%;
        }
      `,
    },
  },

  fonts: {
    default: 'TT Norms Pro',
  },
  fontWeights: {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    ExtraBlack: 900,
  },
  palette: {
    primary500: '#5956E9',
    primary300: '#9C9AF8',
    primary100: '#DEDDFD',
    secondary500: '#FAB8C4',
    secondary300: '#FDD5D5',
    secondary100: '#FEF3F1',
    red500: '#C75C6F',
    red300: '#EEA2A1',
    red100: '#FCE6E1',
    yellow500: '#FFDC60',
    yellow300: '#FFEE9F',
    yellow100: '#FFFADF',
    purple500: '#896BA7',
    purple300: '#D0B3E4',
    purple100: '#F5E8FA',
    success500: '#4BD857',
    success300: '#9DF394',
    success100: '#E5FDDC',
    warning500: '#FC9B0A',
    warning300: '#FECF6B',
    warning100: '#FEF3CD',
    danger500: '#FC473A',
    danger300: '#FEA488',
    danger100: '#FEE7D7',
    info500: '#32D6FF',
    info300: '#83F8FF',
    info100: '#D6FFFB',
    gray900: '#1A202C',
    gray800: '#2D3748',
    gray700: '#4A5568',
    gray600: '#718096',
    gray500: '#A0AEC0',
    gray400: '#CBD5E0',
    gray300: '#E2E8F0',
    gray200: '#EDF2F7',
    gray100: '#F7FAFC',
  },
  borderRadii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '50%',
  },
  altitudes: {
    100: 'box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
  },
  spacing: {
    xs: space(1, 'minor') /* 4 */,
    sm: space(2, 'minor') /* 8 */,
    md: space(3, 'minor') /* 12 */,
    lg: space(4, 'minor') /* 16 */,
    xl: space(5, 'minor') /* 20 */,
    '2xl': space(6, 'minor') /* 24 */,
    '3xl': space(7, 'minor') /* 28 */,
    '4xl': space(8, 'minor') /* 32 */,
    '5xl': space(9, 'minor') /* 36 */,
    '6xl': space(10, 'minor') /* 40 */,
    '7xl': space(11, 'minor') /* 44 */,
    '8xl': space(12, 'minor') /* 48 */,
    '9xl': space(13, 'minor') /* 52 */,
    '10xl': space(14, 'minor') /* 56 */,
    xxl: space(24, 'minor') /* 96 */,
  },
  Select: {
    styles: {
      base: {
        width: '100%',
      },
    },
    Wrapper: {
      styles: {
        base: {
          width: '100%',
        },
      },
    },
  },
  Text: {
    styles: {
      base: {
        color: 'text',
        letterSpacing: '-0.2px',
      },
    },
  },
  Menu: {
    styles: {
      base: {
        color: '#a0aec0',
      },
    },
    Item: {
      styles: {
        base: {
          fontWeight: 'Medium',
        },
      },
      Icon: {
        styles: {
          base: {
            color: '#a0aec0',
          },
        },
      },
    },
    Divider: {
      styles: {
        base: {
          background: '#edf2f7',
        },
      },
    },
    Group: {
      Title: {
        styles: {
          base: {
            background: '#F7FAFC',
            borderRadius: '8px',
            paddingX: '16px',
            paddingY: '4px',
            marginBottom: '8px',
          },
        },
      },
    },
  },
}

export default theme
