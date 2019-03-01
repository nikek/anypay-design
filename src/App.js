import React, { Component } from "react";

import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="nav">
          <Logo className="app-logo" alt="logo" />
        </nav>
        <main className="main">
          <h1 className="page-title">Dashboard</h1>
        </main>
        <nav className="user">
          <div className="balance">Balance</div>
          <div className="account">
            <div className="circle" />
          </div>
        </nav>
        <aside className="detail">
          <h2>Recent Transactions</h2>
        </aside>
      </div>
    );
  }
}

export default App;
