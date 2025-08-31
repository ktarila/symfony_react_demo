export default function Footer() {
    return (
        <footer className="bg-[#222] text-white border-t">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">APP</h3>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            The quick brown fox jumped over the lazy dog
                        </p>
                    </div>

                </div>

                <div
                    className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()}
                        <a href="#" className="text-gray-400 hover:text-primary transition duration-200">Privacy
                            Policy</a>
                        <a href="#" className="text-gray-400 hover:text-primary transition duration-200">Terms of
                            Service</a>
                        <a href="#" className="text-gray-400 hover:text-primary transition duration-200">Cookie
                            Policy</a>
                    </p>
                </div>
            </div>
        </footer >
    );
}
