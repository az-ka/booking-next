import About from "@/components/About";
import Contact from "@/components/Contact";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
import Sparepart from "@/components/Sparepart ";
import Testimoni from "@/components/Testimoni";

export default function Home() {
    return (
        <main>
            {/* Home */}
            <HomePage />

            {/* About */}
            <About />

            {/* Services */}
            <Services />

            {/* Sparepart */}
            <Sparepart />

            {/* Testimoni */}
            <Testimoni />

            {/* Contact */}
            <Contact />
        </main>
    );
}
