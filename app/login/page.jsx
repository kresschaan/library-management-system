// import { useLocation } from "react-router-dom";
import loginImg from "../../public/login-img.jpg";
import FormLogin from "../components/FormLogin";
// import NavBar from "../components/NavBar";
import Image from "next/image";

function Login() {
    return (
        <div className="login-section">
            <div className="flex flex-1 items-center">
                <Image
                    className="relative h-full w-full object-cover"
                    src={loginImg}
                    alt="Login - Mastermind"
                    draggable="false"
                    loading="lazy"
                />
            </div>

            <div className="login-form">
                <FormLogin></FormLogin>
            </div>
        </div>
    );
}

export default Login;
