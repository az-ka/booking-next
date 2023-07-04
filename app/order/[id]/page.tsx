/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const page = () => {
    const params = useParams();
    console.log(params.id);
    const getParams = params.id;

    const data = [
        {
            id: "1",
            title: "Oli Mesin dan Filter Oli",
            desc: "Oli mesin dengan filter oli merupakan suku cadang yang harus rutin diganti, karena usia kerjanya terbilang cepat. Fungsi oli mesin sangatlah penting untuk melumasi bagian dalam dari mesin, sehingga bagian dalam mesin bisa bekerja dengan stabil dan oli mesin juga bisa menghindarkan gesekan antar komponen.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125528510887379074/Oli-mesin-dan-filter-oli-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/satu",
        },
        {
            id: "2",
            title: "Filter udara",
            desc: "Filter udara memang bisa dibersihkan ketika anda melakukan perawatan rutin atau berkala, tapi kekuatan filter udara sangatlah singkat. Filter udara akan berguna untuk menyaring debu atau kotoran yang timbul dari luar. Filter udara yang kotor akan membuat terhambatnya suplai udara yang masuk ke ruang bakar mobil.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125540545784184842/Filter-udara-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/dua",
        },
        {
            id: "3",
            title: "Busi",
            desc: "Busi merupakan salah satu suku cadang yang memiliki bentuk kecil, namun memiliki pengaruh besar dalam menopang kinerja mobil. Busi yang terganggu akan membuat konsumsi bahan bakar menjadi lebih boros, karena pembakaran di ruang mesin kurang berjalan optimal.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125540753939116092/Busi-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/tiga",
        },
        {
            id: "4",
            title: "Aki",
            desc: "Aki mobil melemah bisa dirasakan dari bunyi klakson yang tidak nyaring, lampu indikator yang melemah atau tidak menyala dan paling parah mesin tidak menyala. Dengan melemahnya aki, maka tidak akan ada pasokan ke tenaga sistem kelistrikan mobil.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125540971657048245/Aki-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/empat",
        },
        {
            id: "5",
            title: "Filter AC",
            desc: "Filter AC yang tidak terawat akan membuat kinerja AC mobil menjadi tidak berjalan baik dan saat kinerja AC terganggu, maka suhu di bagian kabin akan sulit untuk dingin. Apabila dibiarkan dingin, lama-kelamaan ac akan rusak.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125541091664470086/Filter-AC-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/lima",
        },
        {
            id: "6",
            title: "Kampas Rem",
            desc: "Rem menjadi komponen yang sangat penting dalam kendaraan, sehingga rem wajib di cek secara berkala. Lakukan pengecekan kampas rem, untuk mengetahui kondisi kampas rem dan saat kampas rem sudah jelek, segeralah ganti dengan yang baru.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125541544808677508/Kampas-Rem-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/enam",
        },
    ];

    const selectedData = data.find((item) => item.id === getParams);

    return (
        <div>
            {/* {getParams}
            {`${selectedData?.img}`} */}
            <section className="my-12 text-gray-600 body-font overflow-hidden">
                <div className="text-center">
                    <h3 className="text-blue-600 font-semibold">Order</h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Detail Produk
                    </p>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow-lg"
                            width={1000}
                            height={1000}
                            src={`${selectedData?.img}`}
                            alt={""}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                BRAND NAME
                            </h2> */}
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {selectedData?.title}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {selectedData?.desc}
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                {/* <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div> */}
                                <div className="flex items-center">
                                    <span className="mr-3">Jumlah</span>
                                    <input
                                        type="number"
                                        id="quantity"
                                        min="1"
                                        value="1"
                                        className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    {selectedData?.price}
                                </span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
