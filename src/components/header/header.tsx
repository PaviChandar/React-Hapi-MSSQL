import Button from "antd/es/button";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { i18n } = useTranslation();

    const handleClick = (lang: any) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header>
            <Button onClick={() => handleClick("en")} >English</Button>
            <Button onClick={() => handleClick("ta")} >Tamil</Button>
        </header>
    )
}

export default Header