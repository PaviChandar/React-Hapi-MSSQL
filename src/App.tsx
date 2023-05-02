import GetAllEmployee from "./components/controller/GetAllEmployee";
import Router from "./routes/Router";

const App: React.FC = () => {

    return(
      <div> 
        <h1>Employee Details</h1>
        {/* <GetAllEmployee /> */}
        <Router />
      </div>
    )
}

export default App;
