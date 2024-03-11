/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				xxs: ['0.625rem', '0.75rem'],
				xs: ['0.75rem', '1rem'], // 12px / 16px
				sm: ['0.875rem', '1.25rem'], // 14px / 20px
				base: ['1rem', '1.5rem'], // 16px / 24px
				md: ['1.125rem', '1.5rem'], // 18px / 24px
				lg: ['1.25rem', '1.5rem'], // 20px / 24px
				xl: ['1.5rem', '2rem'], // 24px / 32px
				'2xl': ['2rem', '2.5rem'], // 32px / 40px
				'3xl': ['2.5rem', '3rem'], // 40px / 48px
				'4xl': ['3rem', '3.5rem'], // 48px / 56px
				'5xl': ['3.5rem', '4rem'] // 56px / 64px
			},
			fontWeight: {
				normal: 400,
				medium: 600,
				semibold: 600,
				display: 600,
				bold: 700
			},
			colors: {
				primary: '#18262B',
				secondary: '#005f73',
				tertiary: '#0a9396',
				quaternary: '#94d2bd',
				quinary: '#e9d8a6',
				senary: '#ee9b00'
			},
			screens: {
				mobil: { min: '580px' },
				tablet: { min: '768px' },
				laptop: { min: '1024px' },
				desktop: { min: '1280px' },
				desktopXl: { min: '1536px' }
			}
		}
	},
	plugins: []
};
