import React from "react";
import {
    PiNumberFiveBold,
    PiNumberFourBold,
    PiNumberOneBold,
    PiNumberSixBold,
    PiNumberThreeBold,
    PiNumberTwoBold,
} from "react-icons/pi";

const Layanan = () => {
    const features = [
        {
            icon: <PiNumberOneBold className="w-6 h-6" />,
            title: "Service AC",
            desc: "Layanan service AC meliputi perbaikan, instalasi, pembersihan, pengisian freon, dan konsultasi AC.",
        },
        {
            icon: <PiNumberTwoBold className="w-6 h-6" />,
            title: "Ganti Oli",
            desc: "Layanan ganti oli meliputi penggantian oli mesin kendaraan dengan oli yang baru, serta penggantian filter oli jika diperlukan.",
        },
        {
            icon: <PiNumberThreeBold className="w-6 h-6" />,
            title: "Service Mesin",
            desc: "Layanan yang mencakup pemeriksaan, perawatan, dan perbaikan mesin kendaraan atau mesin lainnya.",
        },
        {
            icon: <PiNumberFourBold className="w-6 h-6" />,
            title: "Body Repair",
            desc: "Layanan perbaikan dan restorasi bodi kendaraan rusak atau berkarat, termasuk penggantian bagian, pengecatan ulang, dan pemasangan aksesoris pada bodi.",
        },
        {
            icon: <PiNumberFiveBold className="w-6 h-6" />,
            title: "Service AC",
            desc: "LoLayanan service AC mencakup perbaikan, instalasi, pembersihan, pengisian freon, dan konsultasi untuk memastikan kinerja AC optimal dan berfungsi baik.",
        },
        {
            icon: <PiNumberSixBold className="w-6 h-6" />,
            title: "Ganti Aki",
            desc: "Layanan ganti aki meliputi penggantian aki kendaraan dengan aki baru serta pemeriksaan sistem pengisian dan kelistrikan kendaraan.",
        },
    ];

    return (
        <div>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Layanan;
