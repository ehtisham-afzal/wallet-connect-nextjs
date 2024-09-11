import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		},
		animation: {
			"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			"meteor": "meteor 5s linear infinite",
			"marquee": "marquee var(--duration) linear infinite",
			"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
			"slide": "slide var(--speed) ease-in-out infinite alternate",
			"pulse": "pulse var(--duration) ease-out infinite",
			"first": "moveVertical 30s ease infinite",
			"second": "moveInCircle 20s reverse infinite",
			"third": "moveInCircle 40s linear infinite",
			"fourth": "moveHorizontal 40s ease infinite",
			"fifth": "moveInCircle 20s ease infinite",
		},
		keyframes: {
			"border-beam": {
				"100%": {
					"offset-distance": "100%",
				},
			},
			"meteor": {
				"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
				"70%": { opacity: "1" },
				"100%": {
					transform: "rotate(215deg) translateX(-500px)",
					opacity: "0",
				},
			},
			"marquee": {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(calc(-100% - var(--gap)))" },
			},
			"marquee-vertical": {
				from: { transform: "translateY(0)" },
				to: { transform: "translateY(calc(-100% - var(--gap)))" },
			},
			"spin-around": {
				"0%": {
					transform: "translateZ(0) rotate(0)",
				},
				"15%, 35%": {
					transform: "translateZ(0) rotate(90deg)",
				},
				"65%, 85%": {
					transform: "translateZ(0) rotate(270deg)",
				},
				"100%": {
					transform: "translateZ(0) rotate(360deg)",
				},
			},
			"slide": {
				to: {
					transform: "translate(calc(100cqw - 100%), 0)",
				},
			},
			"pulse": {
				"0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
				"50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
			},
			moveHorizontal: {
				"0%": {
					transform: "translateX(-50%) translateY(-10%)",
				},
				"50%": {
					transform: "translateX(50%) translateY(10%)",
				},
				"100%": {
					transform: "translateX(-50%) translateY(-10%)",
				},
			},
			moveInCircle: {
				"0%": {
					transform: "rotate(0deg)",
				},
				"50%": {
					transform: "rotate(180deg)",
				},
				"100%": {
					transform: "rotate(360deg)",
				},
			},
			moveVertical: {
				"0%": {
					transform: "translateY(-50%)",
				},
				"50%": {
					transform: "translateY(50%)",
				},
				"100%": {
					transform: "translateY(-50%)",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;

