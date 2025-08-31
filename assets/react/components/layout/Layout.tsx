import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
            <Header />
            <main className="flex-grow my-10 container mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}
