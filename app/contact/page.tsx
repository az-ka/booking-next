import ButtonComponents from "@/components/ButtonComponents";
import InputComponents from "@/components/InputComponents";
import React from "react";

const page = () => {
    return (
        <div>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="mx-auto space-y-3 sm:text-center">
                        <h3 className="text-blue-600 font-semibold">Contact</h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Contact kami
                        </p>
                        <div className="container pt-5 text-left mx-auto flex sm:flex-nowrap flex-wrap">
                            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    className="absolute inset-0"
                                    title="map"
                                    scrolling="no"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.07645932951!2d111.11706317582882!3d-8.195052882189906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7961bf2b7f8d97%3A0xb1ce21a2a6af47e1!2sBengkel%20Samsi!5e0!3m2!1sid!2sid!4v1686574863476!5m2!1sid!2sid"
                                ></iframe>
                                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                    <div className="lg:w-1/2 px-6">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                            ALAMAT
                                        </h2>
                                        <p className="mt-1">
                                            Jl. Kh. Maghribi, RT.02/RW.02,
                                            Nglebengan, Menadi, Kec. Pacitan,
                                            Kabupaten Pacitan, Jawa Timur 63581
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                            EMAIL
                                        </h2>
                                        <a className="text-blue-500 leading-relaxed">
                                            autosmsi@email.com
                                        </a>
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                            PHONE
                                        </h2>
                                        <p className="leading-relaxed">
                                            +62 82435344778
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                                    Ingin konsultasi?
                                </h2>
                                <p className="leading-relaxed mb-5 text-gray-600">
                                    Hubungi kami lewat form dibawah ini.
                                </p>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Name
                                    </label>
                                    <InputComponents />
                                </div>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <InputComponents />
                                </div>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                                <ButtonComponents text="Kirim" />
                                <p className="text-xs text-gray-500 mt-3">
                                    Pastikan data yang dikirim benar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
