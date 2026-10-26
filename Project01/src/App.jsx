import { useState } from "react";
import "./App.css";

const stats = [
  { title: "Total Revenue", value: "$48,290", change: "+12.8%", icon: "↗" },
  { title: "Active Users", value: "18,420", change: "+8.4%", icon: "◉" },
  { title: "Projects", value: "126", change: "+24", icon: "▣" },
  { title: "Conversion", value: "86.4%", change: "+5.2%", icon: "⚡" },
];

const activities = [
  ["JD", "Jordan Davis", "completed a project", "2m ago", "#8b5cf6"],
  ["AM", "Alex Morgan", "uploaded 8 files", "18m ago", "#06b6d4"],
  ["SK", "Sarah Kim", "joined your workspace", "42m ago", "#ec4899"],
  ["RB", "Ryan Brown", "left a comment", "1h ago", "#22c55e"],
];

function App() {
  const [active, setActive] = useState("Overview");
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="orb orb1" />
      <div className="orb orb2" />

      <aside className="sidebar">
        <div className="brand">
          <div className="brandIcon">✦</div>
          <span>NOVA</span>
        </div>

        <div className="workspace">
          <div className="workspaceLogo">N</div>
          <div>
            <strong>Nova Studio</strong>
            <small>Pro Workspace</small>
          </div>
          <span className="dots">•••</span>
        </div>

        <p className="menuLabel">MENU</p>

        {["Overview", "Analytics", "Projects", "Messages", "Calendar"].map(
          (item, i) => (
            <button
              key={item}
              className={`menu ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              <span>{["⌂", "◒", "▣", "◌", "□"][i]}</span>
              {item}
              {item === "Messages" && <b>4</b>}
            </button>
          )
        )}

        <p className="menuLabel second">WORKSPACE</p>

        <button className="menu">
          <span>♧</span>
          Team
        </button>

        <button className="menu">
          <span>⚙</span>
          Settings
        </button>

        <div className="sidebarBottom">
          <div className="upgrade">
            <div className="spark">✦</div>
            <strong>Unlock Nova Pro</strong>
            <p>Get unlimited access to advanced features.</p>
            <button>Upgrade now</button>
          </div>

          <div className="user">
            <div className="userAvatar">AK</div>
            <div>
              <strong>Alex Kumar</strong>
              <small>alex@nova.com</small>
            </div>
            <span>•••</span>
          </div>
        </div>
      </aside>

      <main>
        <header>
          <div>
            <div className="breadcrumb">
              Workspace <span>/</span> {active}
            </div>
            <h1>{active}</h1>
            <p className="subtitle">
              Here's what's happening with your workspace today.
            </p>
          </div>

          <div className="headerActions">
            <button className="iconBtn" onClick={() => setDark(!dark)}>
              {dark ? "☀" : "☾"}
            </button>
            <button className="iconBtn notification">
              ♧<i />
            </button>
            <button className="create">
              <span>＋</span> Create new
            </button>
          </div>
        </header>

        <section className="stats">
          {stats.map((stat) => (
            <div className="statCard" key={stat.title}>
              <div className="statTop">
                <span>{stat.title}</span>
                <div className="statIcon">{stat.icon}</div>
              </div>
              <h2>{stat.value}</h2>
              <p>
                <strong>{stat.change}</strong> <span>vs last month</span>
              </p>
              <div className="miniChart">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          ))}
        </section>

        <section className="grid">
          <div className="card chartCard">
            <div className="cardHeader">
              <div>
                <p className="eyebrow">PERFORMANCE</p>
                <h3>Revenue overview</h3>
              </div>

              <button className="period">Last 30 days⌄</button>
            </div>

            <div className="chartLegend">
              <span>
                <i className="purple" /> Revenue
              </span>
              <span>
                <i className="cyan" /> Expenses
              </span>
            </div>

            <div className="chart">
              <div className="gridLine one" />
              <div className="gridLine two" />
              <div className="gridLine three" />
              <div className="gridLine four" />

              <div className="yAxis">
                <span>$50k</span>
                <span>$40k</span>
                <span>$30k</span>
                <span>$20k</span>
                <span>$10k</span>
              </div>

              <svg viewBox="0 0 800 280" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity=".3" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  className="area"
                  d="M0 220 C80 200 100 210 150 170 S230 190 280 130 S350 160 400 115 S470 130 520 90 S600 110 650 70 S730 80 800 35 V280 H0Z"
                />

                <path
                  className="line purpleLine"
                  d="M0 220 C80 200 100 210 150 170 S230 190 280 130 S350 160 400 115 S470 130 520 90 S600 110 650 70 S730 80 800 35"
                />

                <path
                  className="line cyanLine"
                  d="M0 245 C80 230 100 235 150 220 S230 225 280 190 S350 205 400 180 S470 195 520 150 S600 175 650 140 S730 155 800 120"
                />
              </svg>

              <div className="xAxis">
                <span>May 01</span>
                <span>May 07</span>
                <span>May 14</span>
                <span>May 21</span>
                <span>May 30</span>
              </div>
            </div>
          </div>

          <div className="card activityCard">
            <div className="cardHeader">
              <div>
                <p className="eyebrow">LIVE</p>
                <h3>Recent activity</h3>
              </div>
              <button className="view">View all</button>
            </div>

            <div className="activityList">
              {activities.map(([initials, name, action, time, color]) => (
                <div className="activity" key={name}>
                  <div
                    className="activityAvatar"
                    style={{ background: color }}
                  >
                    {initials}
                  </div>

                  <div className="activityText">
                    <strong>{name}</strong>
                    <span>{action}</span>
                  </div>

                  <small>{time}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottomGrid">
          <div className="card projectCard">
            <div className="cardHeader">
              <div>
                <p className="eyebrow">PROJECTS</p>
                <h3>Active projects</h3>
              </div>
              <button className="view">View all</button>
            </div>

            <div className="projectList">
              <Project
                icon="✦"
                title="Nova Mobile App"
                team="8 members"
                progress="78%"
                color="#8b5cf6"
              />
              <Project
                icon="◈"
                title="Brand redesign"
                team="5 members"
                progress="64%"
                color="#06b6d4"
              />
              <Project
                icon="◉"
                title="Marketing campaign"
                team="12 members"
                progress="91%"
                color="#ec4899"
              />
            </div>
          </div>

          <div className="card aiCard">
            <div className="aiGlow" />
            <div className="aiIcon">✦</div>
            <p className="eyebrow">NOVA AI</p>
            <h3>Your AI assistant is ready.</h3>
            <p>
              Ask anything about your workspace, projects, analytics or team.
            </p>
            <button className="ask">
              Ask Nova <span>→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function Project({ icon, title, team, progress, color }) {
  return (
    <div className="project">
      <div className="projectIcon" style={{ background: color }}>
        {icon}
      </div>

      <div className="projectName">
        <strong>{title}</strong>
        <span>{team}</span>
      </div>

      <div className="progress">
        <div>
          <span style={{ width: progress, background: color }} />
        </div>
        <b>{progress}</b>
      </div>

      <button className="more">•••</button>
    </div>
  );
}

export default App;