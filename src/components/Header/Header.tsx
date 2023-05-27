import React, { Component } from "react";
import "./_header.component.scss";

export class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <div className="icon"></div>
          <div className="title">Проект</div>
        </div>

        <div className="profile">
          <div className="notifications">
            <img
              className="icon__notifications"
              src={require("../../assets/icons/notification.png")}
              alt=""
            />
          </div>

          <div className="avatar"></div>
          <div className="user">
            <div className="user__name">Иванов В.А.</div>
            <div className="user__position">Должность</div>
          </div>
        </div>
      </header>
    );
  }
}
