import React from "react";
import FriendCard from "./FriendCard";
import "./App.css";

const LOCALSTORAGE_KEY = "switcher-qa:friends";
let prev_state = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (!prev_state) {
  prev_state = {
    1: {
      name: "Boromir Williams",
      email: "neednoking23@yahoo.com",
      activity: "Watch a classic movie",
      price: 0.1,
      accessibility: 0.1,
      type: "recreational",
    },
    2: {
      name: "Samwise Johnson",
      email: "samheartspotatoes@gmail.com",
      activity: "Learn how to iceskate or rollerskate",
      price: 0.1,
      accessibility: 0.25,
      type: "recreational",
    },
    3: {
      name: "Frodo Stone",
      email: "ringerbearer42@gmail.com",
      activity: "Learn to play a new instrument",
      type: "music",
      price: 0.55,
      accessibility: 0.6,
    },
    4: {
      name: "Galadriel Bogart",
      email: "gbogart@gmail.com",
      activity: "Repaint a room in your house",
      type: "recreational",
      price: 0.3,
      accessibility: 0.4,
    },
  };
}

var sortable = Object.entries(prev_state)
  .sort(([, a], [, b]) => a.name.localeCompare(b.name))
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

function App() {
  const saveFriend = (key, friend) => {
    sortable[key] = {
      name: friend.name,
      email: friend.email,
      activity: friend.activity,
      price: friend.price,
      accessibility: friend.accessibility,
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(sortable));
  };

  return (
    <div className="App">
      <div className="navbar navbar-dark bg-dark box-shadow">
        <span className="navbar-brand d-flex align-items-center">
          <strong>Activity Ideas</strong>
        </span>
      </div>
      <div className="container pt-4">
        <div className="card-container mb-4">
          {Object.entries(sortable).map(([key, value]) => {
            return (
              <FriendCard
                key={`friend-${key}`}
                data={value}
                idx={key}
                save={saveFriend}
              />
            );
          })}
        </div>
        {/* <div className="col-md-6 offset-md-3">
          {notification && (
            <div className="alert alert-success" role="alert">
              {notification}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default App;
