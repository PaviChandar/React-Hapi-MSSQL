import { useTranslation } from "react-i18next";

const Header = () => {
    const { i18n } = useTranslation();

    const handleClick = (lang: any) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header>
            <button onClick={() => handleClick("en")} >English</button>
            <button onClick={() => handleClick("ta")} >Tamil</button>
        </header>
    )
}

export default Header