import React, { Component } from "react";
import Nav from "./components/Nav.js";
import "./App.css";
import { ReactComponent as DollarSign } from "./SVG/dollar-sign.svg";
import { ReactComponent as CreditCard } from "./SVG/credit-card.svg";
import { ReactComponent as BarChart } from "./SVG/bar-chart.svg";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <main className="main">
          <h1 className="page-title">Dashboard</h1>
          <div className="card-row">
            <div className="card">
              <span className="welcome-text">Welcome</span>
            </div>
          </div>
          <div className="card-row">
            <div className="card card--yellow">
              <DollarSign />
              <label>
                Income Today <i className="down-arrow" />
              </label>
              <output>$24 012</output>
            </div>
            <div className="card">
              <BarChart />
              <label>
                Accounts Today <i className="up-arrow" />
              </label>
              <output>13 456</output>
            </div>
            <div className="card">
              <CreditCard />
              <label>
                Payments Today <i className="down-arrow" />
              </label>
              <output>10 904</output>
            </div>
          </div>
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
