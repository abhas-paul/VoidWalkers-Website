import Navbar from "@/components/www/layout/Navbar";
import { Footer } from "@/components/www/layout/Footer";

export default function WWWLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
