import Link from "next/link";
import React from "react";

const Sparepart = () => {
    return (
        <div className="flex">
            <div className="mx-auto">
                <div className="border-y mt-6 md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0">
                    <div className="p-4 py-8 border-b md:p-8">
                        <div className="max-w-6xl space-y-3">
                            <h1 className="text-2xl text-gray-800 font-semibold sm:text-3xl">
                                Spare Part
                            </h1>
                            <p>
                                Disini kami juga menyediakan Spare part
                                berkualitas tinggi untuk mobil Anda. Kami
                                memiliki berbagai macam Spare part dari merek
                                terkemuka untuk memastikan mobil Anda
                                mendapatkan kualitas terbaik dengan harga yang
                                terjangkau. Dukungan teknisi kami akan membantu
                                Anda memilih Spare part yang tepat dan membantu
                                pemasangan dengan cepat dan efisien.
                            </p>
                            <div>
                                <Link
                                    href={"/order"}
                                    className="px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-700 active:shadow-lg"
                                >
                                    Cek Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sparepart;
