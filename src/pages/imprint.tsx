import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";

function Home() {
    return (
        <Layout title={`Impressum`}>
            <main className={clsx("container")}>
                <h1>Impressum</h1>
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    Phillipp Glanz
                    <br />
                    Geisinger Straße 6
                    <br />
                    71634 Ludwigsburg
                    <br />
                    Deutschland
                </p>
                <h2>Kontakt</h2>
                <p>
                    Telefon: +33609304530
                    <br />
                    E-Mail:{" "}
                    <a href="mailto:themeinerlp@onelitefeather.net">
                        themeinerlp@onelitefeather.net
                    </a>
                </p>
            </main>
        </Layout>
    );
}

export default Home;
