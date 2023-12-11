"use client";

import {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaInstagram,
} from "react-icons/fa";

function Footer() {
    const redirectToExternalURL = (externalUrl) => {
        window.open(externalUrl, "_blank");
    };

    return (
        <footer className="bg-primary-3">
            <div className="container max-w-6xl py-10 mx-auto">
                <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                    <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                        <div className="h-8">
                            <h1 className="text-gray-500 font-bold text-xl tracking-widest md:ml-3">
                                LIBRA
                            </h1>
                        </div>

                        <div className="flex flex-col items-center space-y-4 font-bold text-gray-500 md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                            <div className="h-10 group">
                                <a href="#">Home</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>

                            <div className="h-10 group">
                                <a href="#">Login</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>

                            <div className="h-10 group">
                                <a href="#">Contact</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                        <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                            <div
                                className="h-8 group"
                                onClick={() =>
                                    redirectToExternalURL(
                                        "https://www.facebook.com"
                                    )
                                }
                            >
                                <FaFacebook size={35} />
                            </div>

                            <div
                                className="h-8 group"
                                onClick={() =>
                                    redirectToExternalURL(
                                        "https://www.twitter.com"
                                    )
                                }
                            >
                                <a href="#">
                                    <FaTwitter size={35} />
                                </a>
                            </div>

                            <div
                                className="h-8 group"
                                onClick={() =>
                                    redirectToExternalURL(
                                        "https://www.pinterest.com"
                                    )
                                }
                            >
                                <a href="#">
                                    <FaPinterest size={35} />
                                </a>
                            </div>

                            <div
                                className="h-8 group"
                                onClick={() =>
                                    redirectToExternalURL(
                                        "https://www.instagram.com"
                                    )
                                }
                            >
                                <a href="#">
                                    <FaInstagram size={35} />
                                </a>
                            </div>
                        </div>

                        <div className="font-bold">
                            &copy; 2023 Libra. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
