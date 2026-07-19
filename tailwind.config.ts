import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F4F8", // DIUBAH: Background sedikit kebiruan agar senada dengan tema baru
        surface: "#FFFFFF",
        foreground: "#111827", // DIUBAH: Teks gelap netral (slate/gray)
        muted: "#4B5563",
        "muted-2": "#9CA3AF",
        border: "#E5E7EB",
        
        // DIUBAH: Token lavender kini berisi variasi warna Royal Blue / Slate Blue
        lavender: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6", // Warna utama pengganti lavender-500
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },

        // DIUBAH: Token brand tetap menggunakan warna Sky Blue cerah
        brand: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },

        accent: {
          pink: "#DBEAFE", // DIUBAH: Menjadi biru muda lembut
          blue: "#BFDBFE",
          mint: "#E6F4EA",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        // DIUBAH: Bayangan (shadow) menggunakan rona biru (rgba 59, 130, 246) alih-alih ungu
        soft: "0 4px 20px -4px rgba(59, 130, 246, 0.08)",
        card: "0 8px 30px -8px rgba(59, 130, 246, 0.12)",
        lift: "0 20px 50px -12px rgba(59, 130, 246, 0.20)",
        glow: "0 0 0 1px rgba(59, 130, 246, 0.05), 0 12px 40px -10px rgba(59, 130, 246, 0.25)",
      },
      backgroundImage: {
        // DIUBAH: Efek radial glow di background atas sekarang berwarna biru transparan
        "lavender-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(96, 165, 250, 0.15) 0%, rgba(240, 244, 248, 0) 70%)",
        // DIUBAH: Gradasi linear menggunakan perpaduan Blue 500, Sky 300, hingga Sky 100
        "lavender-gradient": "linear-gradient(135deg, #3B82F6 0%, #7DD3FC 50%, #E0F2FE 100%)",
        "card-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;