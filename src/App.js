import React, { Component } from "react";
import Nav from "./components/Nav.js";
import "./App.css";
import { ReactComponent as DollarSignIcon } from "./SVG/dollar-sign.svg";
import { ReactComponent as CreditCardIcon } from "./SVG/credit-card.svg";
import { ReactComponent as BarChartIcon } from "./SVG/bar-chart.svg";
import { ReactComponent as XIcon } from "./SVG/x.svg";
import { ReactComponent as SearchIcon } from "./SVG/search.svg";
import { ReactComponent as SettingsIcon } from "./SVG/sliders.svg";
import { ReactComponent as UserIcon } from "./SVG/user.svg";

function WelcomeCard() {
  return (
    <div className="card-row">
      <div className="card welcome-background">
        <span className="welcome-text">Welcome</span>
        <XIcon className="close-x" />
      </div>
    </div>
  );
}

function StatusCards() {
  return (
    <div className="card-row">
      <div className="card card--yellow">
        <DollarSignIcon />
        <label>
          Income Today <i className="down-arrow" />
        </label>
        <output>$24 012</output>
      </div>
      <div className="card">
        <BarChartIcon />
        <label>
          Accounts Today <i className="up-arrow" />
        </label>
        <output>13 456</output>
      </div>
      <div className="card">
        <CreditCardIcon />
        <label>
          Payments Today <i className="down-arrow" />
        </label>
        <output>10 904</output>
      </div>
    </div>
  );
}

const projects = [
  {
    icon: DollarSignIcon,
    title: "AnyPay",
    url: "http://theurl.com",
    status: "active"
  },
  {
    icon: UserIcon,
    title: "Another site",
    url: "https://anothersite.com",
    status: "error"
  },
  {
    icon: DollarSignIcon,
    title: "AnyPay",
    url: "theurl.com",
    status: "inactive"
  },
  {
    icon: UserIcon,
    title: "AnyPay",
    url: "theurl.com",
    status: "active"
  }
];

function StatusIndicator({ status }) {
  switch (status) {
    case "active":
      return <span className="dot-active">Active</span>;
    case "error":
      return <span className="dot-error">Error</span>;
    default:
      return <span className="dot-inactive">Inactive</span>;
  }
}

function ProjectRow({ project }) {
  const Icon = project.icon;
  return (
    <li>
      <Icon />
      <div>
        <h4>{project.title}</h4>
        <span>{project.url}</span>
      </div>
      <div>
        <StatusIndicator status={project.status} />
      </div>
      <div>
        <button alt="settings">
          <SettingsIcon />
        </button>
        <button alt="analytics">
          <BarChartIcon />
        </button>
      </div>
    </li>
  );
}

function MainProjects() {
  return (
    <section>
      <header className="section-header">
        <h2>Projects</h2>
        <SearchIcon />
        <div className="header-right">
          <button>Add More</button>
        </div>
      </header>
      <ul className="project-list">
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} />
        ))}
      </ul>
    </section>
  );
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <main className="main">
          <h1 className="page-title">Dashboard</h1>
          <WelcomeCard />
          <StatusCards />
          <MainProjects />
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
