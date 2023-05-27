import "./assets/sass/App.scss";
import { HeaderComponent } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import CustomizedAccordions from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
      </header>

      <div className="container">
        <Sidebar />

        <div className="customer__table">
          <div className="table__title">Задачи</div>

          <div className="table">
            <div className="table__header">
              <div className="table__column">
                <div className="row__header" style={{ width: "99px" }}>
                  <p>Дата</p>
                </div>
                <div className="row__header" style={{ width: "75px" }}>
                  <p>Шифр Задачи</p>
                </div>
                <div className="row__header" style={{ width: "77px" }}>
                  <p>Шифр Задачи</p>
                </div>
                <div className="row__header" style={{ width: "171px" }}>
                  <p>Задачa</p>
                </div>
                <div className="row__header" style={{ width: "113px" }}>
                  <p>Статус</p>
                </div>
                <div className="row__header" style={{ width: "123px" }}>
                  <p>Ответственный</p>
                </div>
                <div className="row__header" style={{ width: "134px" }}>
                  <p>Переназначить</p>
                </div>
                <div className="row__header" style={{ width: "101px" }}>
                  <p>Приоритет</p>
                </div>
                <div className="row__header" style={{ width: "121px" }}>
                  <p>Комментарий</p>
                </div>
                <div
                  className="row__header"
                  style={{ width: "82px", paddingLeft: "19.5px" }}
                >
                  <p>План время</p>
                </div>
                <div
                  className="row__header"
                  style={{ width: "82px", paddingLeft: "19.5px" }}
                >
                  <p>Факт время</p>
                </div>
                <div className="row__header" style={{ width: "105px" }}>
                  <p>Начал</p>
                </div>
                <div className="row__header" style={{ width: "105px" }}>
                  <p>Завершил</p>
                </div>
              </div>
            </div>

            <div className="table__accordion">
              <CustomizedAccordions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
