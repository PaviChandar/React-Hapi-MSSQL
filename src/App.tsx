import { useTranslation } from "react-i18next";

import Router from "./routes/router";

const App = () => {

  const { t } = useTranslation()

  return(
    <div> 
      <h1>{ t("employee.details") }</h1>
      <Router />
    </div>
  )
}

export default App;
