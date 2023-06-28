import Searchbar from "./Searchbar";
import City from "./city";
import Conditions from "./conditions";
import Currenttemp from "./currenttemp";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="Reactcontainer">
      <div className="App">
        <div className="Container">
          <div className="Weather">
            <div className="card border-info mb-3">
              <div className="card-header">
                <div className="card-header">
                  <Searchbar />
                </div>

                <div className="col-2 col-md-3 col-lg-6"></div>
              </div>

              <div className="card-body text-info">
                <div className="row">
                  <div className="col-8">
                    <City />
                  </div>
                  <div className="col-4">
                    <Currenttemp />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Conditions />
                  </div>
                </div>
                <div id="forecast"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
