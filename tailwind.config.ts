import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色板
        primary: {
          DEFAULT: '#FF8BA7',
          light: '#FFC4D6',
          lighter: '#FFE4ED',
          lightest: '#FFF5F8',
          dark: '#E66A89',
          darker: '#CC4D6B',
          darkest: '#B33351',
        },
        professional: {
          DEFAULT: '#4A90E2',
          light: '#7CB3FF',
          lighter: '#B3D4FF',
          lightest: '#E6F0FF',
          dark: '#2B7CD4',
          darker: '#1B5699',
          darkest: '#0D3B66',
        },
        // 文字颜色
        text: {
          primary: '#333333',
          secondary: '#666666',
          tertiary: '#999999',
          placeholder: '#CCCCCC',
          inverse: '#FFFFFF',
        },
        // 背景色
        background: {
          primary: '#FFFFFF',
          secondary: '#FAFAFA',
          tertiary: '#F5F5F5',
          divider: '#EEEEEE',
        },
        // 功能色
        success: '#52C41A',
        warning: '#FAAD14',
        error: '#FF4D4F',
        link: '#1890FF',
      },
      // 字体大小
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '30px'],
        '2xl': ['24px', '36px'],
        '3xl': ['30px', '44px'],
        '4xl': ['36px', '52px'],
        '5xl': ['48px', '64px'],
      },
      // 间距系统
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      // 圆角
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      // 阴影系统
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        md: '0 6px 12px -2px rgba(0, 0, 0, 0.12)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 12px 20px -8px rgba(0, 0, 0, 0.15)',
      },
      // 动画
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-in-out',
        'slide-right': 'slideRight 0.4s ease-in-out',
        'scale': 'scale 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
