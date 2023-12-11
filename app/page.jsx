// import Image from "next/image";
import Homepage from "../app/components/Homepage";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function Main() {
    return (
        <>
            <Navigation></Navigation>
            <Homepage></Homepage>
            <Feature></Feature>
            <Footer></Footer>
        </>
    );
}
