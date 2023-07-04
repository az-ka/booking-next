import Image from "next/image";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <section className="flex min-h-screen">
                <div className="max-w-screen-xl m-auto mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
                    <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
                        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                            Layanan Service Mobil Profesional Dan Terpercaya Di{" "}
                            <span className="text-blue-500">AutoSamsi</span>
                        </h1>
                        <p className="max-w-xl mx-auto xl:mx-0">
                            Perbaikan dan Perawatan Mobil dengan Kualitas
                            Terbaik dan Harga Kompetitif memberikan informasi
                            tambahan yang penting. Pengunjung dapat melihat
                            bahwa Autosamsi tidak hanya menawarkan layanan
                            perbaikan mobil, tetapi juga perawatan mobil secara
                            keseluruhan. Dengan menekankan kualitas terbaik dan
                            harga kompetitif, halaman ini menunjukkan bahwa
                            Autosamsi berkomitmen untuk memberikan pelayanan
                            yang terbaik dengan harga yang terjangkau.
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
                            <a
                                href="#"
                                className="py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
                            >
                                Lihat selengkapnya
                            </a>
                        </div>
                        <div className="pt-5">
                            <p className="text-center  sm:text-left text-sm text-gray-700 font-semibold">
                                Trusted by the best companies
                            </p>
                            <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                                <Image
                                    src={
                                        "https://media.discordapp.net/attachments/1125528451428917389/1125739533795856424/snap-on-2-logo-png-transparent.png?width=1193&height=671"
                                    }
                                    alt={""}
                                    width="120"
                                    height="28"
                                />
                                <Image
                                    src={
                                        "https://media.discordapp.net/attachments/1125528451428917389/1125740162798854234/Craftsman-Logo.png?width=1193&height=671"
                                    }
                                    alt={""}
                                    width="120"
                                    height="28"
                                />
                                <Image
                                    src={
                                        "https://media.discordapp.net/attachments/1125528451428917389/1125740429137162380/matco-tools-corporation-vector-logo.png"
                                    }
                                    alt={""}
                                    width="120"
                                    height="28"
                                />
                                <Image
                                    src={
                                        "https://media.discordapp.net/attachments/1125528451428917389/1125743403284566056/dewalt-4-logo-png-transparent.png?width=1193&height=671"
                                    }
                                    alt={""}
                                    width="120"
                                    height="28"
                                />
                                <Image
                                    src={
                                        "https://media.discordapp.net/attachments/1125528451428917389/1125748191174873159/bosch-logo-png-transparent.png?width=1193&height=671"
                                    }
                                    alt={""}
                                    width="120"
                                    height="28"
                                />
                                <Image
                                    src={
                                        "https://media.discordapp.net/attachments/1125528451428917389/1125746966991740928/GW_Vert_Stacked2C.png?width=1193&height=671"
                                    }
                                    alt={""}
                                    width="120"
                                    height="28"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
                        <div className="relative">
                            <Image
                                src={
                                    "https://media.discordapp.net/attachments/1125528451428917389/1125727151438696578/image.png?width=537&height=671"
                                }
                                className="rounded-lg"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
