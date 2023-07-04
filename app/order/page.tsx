import Image from "next/image";
import React from "react";

const page = () => {
    const orders = [
        {
            id: "1",
            title: "Oli Mesin dan Filter Oli",
            desc: "Oli mesin dengan filter oli merupakan suku cadang yang harus rutin diganti, karena usia kerjanya terbilang cepat. Fungsi oli mesin sangatlah penting untuk melumasi bagian dalam dari mesin, sehingga bagian dalam mesin bisa bekerja dengan stabil dan oli mesin juga bisa menghindarkan gesekan antar komponen.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125528510887379074/Oli-mesin-dan-filter-oli-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/1",
        },
        {
            id: "2",
            title: "Filter udara",
            desc: "Filter udara memang bisa dibersihkan ketika anda melakukan perawatan rutin atau berkala, tapi kekuatan filter udara sangatlah singkat. Filter udara akan berguna untuk menyaring debu atau kotoran yang timbul dari luar. Filter udara yang kotor akan membuat terhambatnya suplai udara yang masuk ke ruang bakar mobil.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125540545784184842/Filter-udara-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/2",
        },
        {
            id: "3",
            title: "Busi",
            desc: "Busi merupakan salah satu suku cadang yang memiliki bentuk kecil, namun memiliki pengaruh besar dalam menopang kinerja mobil. Busi yang terganggu akan membuat konsumsi bahan bakar menjadi lebih boros, karena pembakaran di ruang mesin kurang berjalan optimal.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125540753939116092/Busi-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/3",
        },
        {
            id: "4",
            title: "Aki",
            desc: "Aki mobil melemah bisa dirasakan dari bunyi klakson yang tidak nyaring, lampu indikator yang melemah atau tidak menyala dan paling parah mesin tidak menyala. Dengan melemahnya aki, maka tidak akan ada pasokan ke tenaga sistem kelistrikan mobil.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125540971657048245/Aki-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/4",
        },
        {
            id: "5",
            title: "Filter AC",
            desc: "Filter AC yang tidak terawat akan membuat kinerja AC mobil menjadi tidak berjalan baik dan saat kinerja AC terganggu, maka suhu di bagian kabin akan sulit untuk dingin. Apabila dibiarkan dingin, lama-kelamaan ac akan rusak.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125541091664470086/Filter-AC-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/5",
        },
        {
            id: "6",
            title: "Kampas Rem",
            desc: "Rem menjadi komponen yang sangat penting dalam kendaraan, sehingga rem wajib di cek secara berkala. Lakukan pengecekan kampas rem, untuk mengetahui kondisi kampas rem dan saat kampas rem sudah jelek, segeralah ganti dengan yang baru.",
            img: "https://media.discordapp.net/attachments/1125528451428917389/1125541544808677508/Kampas-Rem-1024x583.png",
            price: "Rp 80.000",
            date: "Jan 4 2022",
            href: "order/6",
        },
    ];

    return (
        <div>
            <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
                <div className="text-center">
                    <h3 className="text-blue-600 font-semibold">Order</h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Order Spare Part
                    </p>
                </div>
                <div className="my-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {orders.map((items, key) => (
                        <article
                            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                            key={key}
                        >
                            <a href={items.href}>
                                <Image
                                    src={items.img}
                                    loading="lazy"
                                    alt={items.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-52 rounded-t-md"
                                />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div>
                                        <span className="block text-gray-400 text-sm">
                                            {items.date}
                                        </span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    {/* <p className="text-gray-400 text-sm mt-1">
                                        {items.desc.length > 150
                                            ? `${items.desc.substring(
                                                  0,
                                                  150
                                              )}...`
                                            : items.desc}
                                    </p> */}
                                    <p className="font-bold mt-2">
                                        {items.price}
                                    </p>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default page;
