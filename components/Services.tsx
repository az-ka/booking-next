import React from "react";
import Layanan from "./Layanan";

const Services = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="m-auto">
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                        <div className=" mx-auto space-y-3 sm:text-center">
                            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Layanan kami
                            </p>
                            <p>
                                Layanan ini mencakup berbagai jenis perbaikan,
                                mulai dari perbaikan mesin, sistem suspensi,
                                sistem rem, AC, sistem kelistrikan, dan lainnya.
                                Tim mekanik yang terlatih dan berpengalaman akan
                                melakukan diagnosis awal dan memberikan
                                rekomendasi perbaikan yang diperlukan untuk
                                kendaraan pelanggan.
                            </p>
                        </div>
                    </div>
                </section>
                <Layanan />
            </div>
        </div>
    );
};

export default Services;
