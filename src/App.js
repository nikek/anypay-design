import React, { Component } from "react";
import Nav from "./components/Nav.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <main className="main">
          <h1 className="page-title">Dashboard</h1>
          <div className="card-shadowcard">Welcome</div>
        </main>
        <div className="panel card-shadow">
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
      </div>
    );
  }
}

export default App;
