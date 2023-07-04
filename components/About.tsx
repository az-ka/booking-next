import React from "react";
import Teknisi from "./Teknisi";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className=" mx-auto space-y-3 sm:text-center">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Tentang kami
                        </p>
                        <p>
                            Autosamsi adalah bengkel mobil terpercaya yang
                            berpengalaman dalam memperbaiki dan merawat mobil
                            Anda. Kami menyediakan layanan perawatan rutin,
                            perbaikan, hingga perbaikan besar untuk semua merek
                            dan tipe kendaraan. Teknisi kami yang berpengalaman
                            dan bersertifikat akan melakukan diagnosa cepat dan
                            akurat, lalu melakukan perbaikan dan penggantian
                            suku cadang secara profesional. Kami menggunakan
                            suku cadang berkualitas tinggi dan garansi untuk
                            kepuasan pelanggan. Nikmati layanan berkualitas di
                            Autosamsi dan dapatkan mobil Anda kembali dalam
                            kondisi prima.
                        </p>
                    </div>
                </div>
            </section>
            <Teknisi />
        </div>
    );
};

export default About;
