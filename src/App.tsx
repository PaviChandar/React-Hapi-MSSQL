import { useTranslation } from "react-i18next";

import Router from "./routes/router";

const App = () => {

  const { t, i18n } = useTranslation()
  i18n.changeLanguage()

  return(
    <div> 
      <h1>{ t("employee.details") }</h1>
      <Router />
    </div>
  )
}

export default App;
