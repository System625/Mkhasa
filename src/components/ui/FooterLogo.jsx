import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.webp";

export const FooterLogo = ({ backGroundColor }) => {
    return (
        <Link to="/" aria-label="Navigate to home page">
            <div className={"flex gap-x-2 flex-col items-center"}>
                <img
                    src={logoImg}
                    alt=""
                    className="aspect-[40/37] w-8 min-[360px]:w-24 md:w-12 lg:w-14"
                />
                <p
                    className={`font-fuzzy font-bold tracking-tighter text-sm pt-2 ${backGroundColor === "black" ? "text-white" : "text-app-red"
                        } min-[360px]:text-lg md:text-xl lg:text-2xl`}

                >
                    mkhasa
                </p>
            </div>
        </Link>
    );
};


