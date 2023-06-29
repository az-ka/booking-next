import Layanan from "@/components/Layanan";
import React from "react";

const page = () => {
    return (
        <div>
            <section className="pt-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className=" mx-auto space-y-3 sm:text-center">
                        <h3 className="text-blue-500 font-semibold">
                            Services
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Layanan kami
                        </p>
                        <p>
                            Layanan ini mencakup berbagai jenis perbaikan, mulai
                            dari perbaikan mesin, sistem suspensi, sistem rem,
                            AC, sistem kelistrikan, dan lainnya. Tim mekanik
                            yang terlatih dan berpengalaman akan melakukan
                            diagnosis awal dan memberikan rekomendasi perbaikan
                            yang diperlukan untuk kendaraan pelanggan.
                        </p>
                    </div>
                </div>
            </section>

            <Layanan />
        </div>
    );
};

export default page;
