module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37", // warm-gold
          50: "#FEFCF3", // warm-gold-50
          100: "#FDF8E1", // warm-gold-100
          200: "#FAF0C4", // warm-gold-200
          300: "#F6E8A6", // warm-gold-300
          400: "#F2DF89", // warm-gold-400
          500: "#D4AF37", // warm-gold-500
          600: "#B8860B", // warm-gold-600
          700: "#9A7209", // warm-gold-700
          800: "#7C5E07", // warm-gold-800
          900: "#5E4A05", // warm-gold-900
        },
        secondary: {
          DEFAULT: "#F8F6F0", // warm-off-white
          50: "#FEFEFE", // warm-off-white-50
          100: "#FDFCF8", // warm-off-white-100
          200: "#FBF9F3", // warm-off-white-200
          300: "#F8F6F0", // warm-off-white-300
          400: "#F5F3ED", // warm-off-white-400
          500: "#F2F0EA", // warm-off-white-500
        },
        accent: {
          DEFAULT: "#B8860B", // deep-gold
          50: "#FDF6E3", // deep-gold-50
          100: "#FAEDCC", // deep-gold-100
          200: "#F5DB99", // deep-gold-200
          300: "#F0C966", // deep-gold-300
          400: "#EBB733", // deep-gold-400
          500: "#B8860B", // deep-gold-500
          600: "#9A7209", // deep-gold-600
          700: "#7C5E07", // deep-gold-700
        },
        background: "#FFFFFF", // pure-white
        surface: {
          DEFAULT: "#FAFAFA", // subtle-gray
          50: "#FEFEFE", // subtle-gray-50
          100: "#FDFDFD", // subtle-gray-100
          200: "#FCFCFC", // subtle-gray-200
          300: "#FAFAFA", // subtle-gray-300
          400: "#F8F8F8", // subtle-gray-400
          500: "#F5F5F5", // subtle-gray-500
        },
        text: {
          primary: "#2C2C2C", // warm-charcoal
          secondary: "#6B6B6B", // medium-gray
          tertiary: "#9CA3AF", // light-gray
          inverse: "#FFFFFF", // white
        },
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        border: {
          DEFAULT: "#F0F0F0", // light-border
          light: "#F5F5F5", // lighter-border
          dark: "#E5E5E5", // darker-border
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'gold': '0 2px 8px rgba(212, 175, 55, 0.1)',
        'floating': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
        'scale-in': 'scale-in 200ms ease-out forwards',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}