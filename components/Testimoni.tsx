"use client";
import React, { useState } from "react";

const Testimoni = () => {
    const testimonials = [
        {
            name: "Bapak Yanto",
            title: "Pengusaha",
            quote: "Autosamsi memberikan layanan yang sangat profesional dan berkualitas dalam merawat mobil saya. Mereka memiliki teknisi yang terampil dan peralatan canggih untuk menangani masalah pada mobil saya. Saya sangat puas dengan hasilnya dan akan merekomendasikan Autosamsi kepada teman dan keluarga saya.",
        },
        {
            name: "Ibu Dewi",
            title: "Karyawan",
            quote: "Saya sudah beberapa kali menggunakan layanan Autosamsi untuk merawat mobil saya dan selalu puas dengan hasilnya. Mereka sangat ramah dan responsif dalam merespon permintaan saya. Harga yang ditawarkan juga sangat terjangkau dibandingkan dengan bengkel lain. Terima kasih Autosamsi!",
        },
        {
            name: "Pak Ahmad",
            title: "Wiraswasta",
            quote: "Autosamsi adalah bengkel terbaik yang pernah saya temukan. Mereka sangat profesional, cepat, dan teliti dalam menangani masalah pada mobil saya. Saya sangat menghargai saran dan tips yang mereka berikan untuk merawat mobil saya. Saya pasti akan kembali ke Autosamsi untuk perawatan mobil saya di masa depan. ",
        },
        {
            name: "Pak Budi",
            title: "Karyawan Pemerintah",
            quote: "Autosamsi adalah bengkel yang sangat andal dan terpercaya dalam merawat mobil saya. Mereka selalu memberikan layanan yang sangat berkualitas dan teliti dalam menangani masalah pada mobil saya. Harga yang ditawarkan juga sangat wajar dan terjangkau. Saya sangat merekomendasikan Autosamsi untuk siapa saja yang membutuhkan layanan perawatan mobil berkualitas. ",
        },
        {
            name: "Ibu Rina",
            title: "Pegawai Negeri Sipil",
            quote: "Saya sangat terkesan dengan layanan Autosamsi yang sangat profesional dan berpengalaman. Mereka selalu memberikan saran dan tips yang berguna untuk merawat mobil saya agar tetap dalam kondisi prima. Harga yang ditawarkan juga sangat terjangkau dan sesuai dengan kualitas layanan yang diberikan. Terima kasih Autosamsi!",
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    return (
        <div>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-blue-500 font-semibold pb-6">
                            Testimoni
                        </h3>
                        <ul>
                            {testimonials.map((item, idx) =>
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">
                                                        {item.name}
                                                    </span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">
                                                        {item.title}
                                                    </span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : (
                                    ""
                                )
                            )}
                        </ul>
                    </div>
                    <div className="mt-6">
                        <ul className="flex gap-x-3 justify-center">
                            {testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button
                                        className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-blue-500 focus:ring ${
                                            currentTestimonial == idx
                                                ? "bg-blue-500"
                                                : "bg-gray-300"
                                        }`}
                                        onClick={() =>
                                            setCurrentTestimonial(idx)
                                        }
                                    ></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimoni;
