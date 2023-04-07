import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont",
});

export const metadata = {
    title: {
        default: "Portfolio | Home Page",
        template: "Portfolio | %s",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
                        {children}
                    </main>
                <Footer />
            </body>
        </html>
    );
}
