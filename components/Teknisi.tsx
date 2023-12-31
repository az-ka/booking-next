import Image from "next/image";
import React from "react";

const Teknisi = () => {
    const team = [
        {
            avatar: "https://media.discordapp.net/attachments/1125528451428917389/1125756238840467486/image.png?width=671&height=671",
            name: "Budi Santoso",
            title: "Ahli body repair mobil BMW",
            desc: "Mempunyai sertifikat resmi dari BMW sebagai teknisi body repair dan painting. Telah memperbaiki ratusan mobil BMW dengan hasil kerja rapi dan sempurna",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://media.discordapp.net/attachments/1125528451428917389/1125756345187057684/image.png?width=671&height=671",
            name: "Oka Sudirman",
            title: "Ahli AC dan Audio mobil varian high end seperti Audi dan Jaguar",
            desc: "Berpengalaman lebih dari 12 tahun melayani perbaikan AC mobil, instalasi audio mobil dan perbaikan kelistrikan kendaraan premium.",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://media.discordapp.net/attachments/1125528451428917389/1125756551437766666/image.png?width=671&height=671",
            name: "Gatot Hendro",
            title: "Ahli chassis dan suspensi mobil Mercedes-Benz",
            desc: "Berpengalaman lebih dari 20 tahun melayani perbaikan chassis, suspensi dan rem mobil Mercedes-Benz.",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://media.discordapp.net/attachments/1125528451428917389/1125756637102211092/image.png?width=671&height=671",
            name: "Rian Pangestu",
            title: "Ahli transmisi manual dan matic semua merek mobil",
            desc: "Bersertifikat dari beberapa pabrikan mobil, mampu memperbaiki berbagai kerusakan pada transmisi dan kopling mobil.",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://media.discordapp.net/attachments/1125528451428917389/1125756765993189376/image.png?width=671&height=671",
            name: "Eko Saputra",
            title: "Ahli kelistrikan mobil Honda",
            desc: "Mempunyai sertifikat resmi dari Honda dan telah melayani pemasangan audio, alarm dan perbaikan kelistrikan Honda lebih dari 10 tahun.",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://media.discordapp.net/attachments/1125528451428917389/1125757068075335744/image.png?width=671&height=671",
            name: "Adi Pranoto",
            title: "Ahli mesin mobil Toyota",
            desc: "Berpengalaman lebih dari 15 tahun memperbaiki dan overhaul mesin mobil Toyota.",
            linkedin: "#",
            twitter: "#",
        },
    ];

    return (
        <div>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Teknisi
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Berikut adalah teknisi kami.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {team.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="border-y mt-6 md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0"
                                >
                                    <div className="p-4 py-8 md:p-8">
                                        <div className="w-24 h-24 mx-auto">
                                            <Image
                                                src={item.avatar as string}
                                                className="w-full h-full rounded-full"
                                                alt={""}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <h4 className="text-gray-700 font-semibold sm:text-lg">
                                                {item.name}
                                            </h4>
                                            <p className="text-blue-600">
                                                {item.title}
                                            </p>
                                            <p className="text-gray-600 mt-2">
                                                {item.desc}
                                            </p>
                                            <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                                <a href={item.twitter}>
                                                    <svg
                                                        className="w-5 h-5 duration-150 hover:text-gray-500"
                                                        fill="currentColor"
                                                        viewBox="0 0 48 48"
                                                    >
                                                        <g>
                                                            <path
                                                                fill="currentColor"
                                                                d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_17_80">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M0 0h48v48H0z"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href={item.linkedin}>
                                                    <svg
                                                        className="w-5 h-5 duration-150 hover:text-gray-500"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                    >
                                                        <g>
                                                            <path
                                                                fill="currentColor"
                                                                d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_17_68">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M0 0h48v48H0z"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
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

export default Teknisi;
