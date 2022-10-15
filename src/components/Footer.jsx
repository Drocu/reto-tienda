import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Rodtiigo/" role="button" target="_blank"
                        ><i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://wa.me/51987095779" role="button" target="_blank"
                        ><i class="fa fa-whatsapp" aria-hidden="true" ></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/arandaybanez/" role="button" target="_blank"
                        ><i class="fa fa-instagram" aria-hidden="true"></i></a>

                    </section>
                </div>

                <div className="text-center p-3" >
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">Rodrigo Aranda</a>
                </div>
            </div>
        </>
    );
}

export default Footer;