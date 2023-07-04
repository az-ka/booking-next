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
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-air-conditioning-disabled"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                </svg>
            ),
            title: "Service AC",
            desc: "Layanan service AC meliputi perbaikan, instalasi, pembersihan, pengisian freon, dan konsultasi AC.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bottle-filled"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M13 1a2 2 0 0 1 1.995 1.85l.005 .15v.5c0 1.317 .381 2.604 1.094 3.705l.17 .25l.05 .072a9.093 9.093 0 0 1 1.68 4.92l.006 .354v6.199a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6.2a9.1 9.1 0 0 1 1.486 -4.982l.2 -.292l.05 -.069a6.823 6.823 0 0 0 1.264 -3.957v-.5a2 2 0 0 1 1.85 -1.995l.15 -.005h2zm.362 5h-2.724a8.827 8.827 0 0 1 -1.08 2.334l-.194 .284l-.05 .069a7.091 7.091 0 0 0 -1.307 3.798l-.003 .125a3.33 3.33 0 0 1 1.975 -.61a3.4 3.4 0 0 1 2.833 1.417c.27 .375 .706 .593 1.209 .583a1.4 1.4 0 0 0 1.166 -.583a3.4 3.4 0 0 1 .81 -.8l.003 .183c0 -1.37 -.396 -2.707 -1.137 -3.852l-.228 -.332a8.827 8.827 0 0 1 -1.273 -2.616z"
                        stroke-width="0"
                        fill="currentColor"
                    ></path>
                </svg>
            ),
            title: "Ganti Oli",
            desc: "Layanan ganti oli meliputi penggantian oli mesin kendaraan dengan oli yang baru, serta penggantian filter oli jika diperlukan.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-car"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                </svg>
            ),
            title: "Service Mesin",
            desc: "Layanan yang mencakup pemeriksaan, perawatan, dan perbaikan mesin kendaraan atau mesin lainnya.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-hammer"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385"></path>
                    <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z"></path>
                </svg>
            ),
            title: "Body Repair",
            desc: "Layanan perbaikan dan restorasi bodi kendaraan rusak atau berkarat, termasuk penggantian bagian, pengecatan ulang, dan pemasangan aksesoris pada bodi.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-couchdb"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 12h12v-2a2 2 0 0 1 2 -2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a2 2 0 0 1 2 2v2z"></path>
                    <path d="M6 15h12"></path>
                    <path d="M6 18h12"></path>
                    <path d="M21 11v7"></path>
                    <path d="M3 11v7"></path>
                </svg>
            ),
            title: "Engine Tune Up",
            desc: "melakukan penyetelan ulang dan membersihkan semua komponen dan sistem yang ada di mesin mobil agar kembali seperti semula, bahkan mengalami peningkatan performa.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-car-crash"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4"></path>
                    <path d="M14 8v-2"></path>
                    <path d="M19 12h2"></path>
                    <path d="M17.5 15.5l1.5 1.5"></path>
                    <path d="M17.5 8.5l1.5 -1.5"></path>
                </svg>
            ),
            title: "Ganti Aki",
            desc: "Layanan ganti aki meliputi penggantian aki kendaraan dengan aki baru serta pemeriksaan sistem pengisian dan kelistrikan kendaraan.",
        },
    ];

    return (
        <div>
            <section className="py-5">
                <div className="max-w-screen-xl mx-auto px-4 text-left text-gray-600 md:px-8">
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="space-y-3 border-y mt-6 md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0"
                                >
                                    <div className="p-4 py-8 md:p-8">
                                        <span>{item.icon}</span>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>{item.desc}</p>
                                    </div>
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
