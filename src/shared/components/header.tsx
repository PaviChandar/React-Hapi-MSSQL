import Button from "antd/es/button";
import { useTranslation } from "react-i18next";

import "../../assets/header.css"

const Header = () => {
    const { i18n } = useTranslation();

    const handleClick = (lang: any) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header>
            <Button onClick={() => handleClick("en")} className="english" >English</Button>
            <Button onClick={() => handleClick("ta")} className="tamil" >Tamil</Button>
        </header>
    )
}

export default Header