import React, { useState } from "react";

const ACTIVITY_TYPES = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

function FriendCard({ data, idx, save }) {
  const [friend, setFriend] = useState(data);
  const onTypeChange = (e) => {
    e.persist();
    setFriend((prev) => ({ ...prev, type: e.target.value }));
  };

  const getNewActivity = async () => {
    const res = await fetch(
      `https://www.boredapi.com/api/activity?type=cooking`
    );
    const { activity, price, accessibility } = await res.json();
    setFriend((prev) => {
      const updated = {
        ...prev,
        activity: activity,
        price: price,
        accessibility: accessibility,
      };
      save(idx, updated);
      return updated;
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text text-muted">{idx}</p>
        <h5 className="card-title">{friend.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{friend.email}</h6>
        <div className="form-group row justify-content-center">
          <select
            className="form-control col-sm-6"
            value={friend.type}
            id={`activity-type-select-${friend.id}`}
            onChange={onTypeChange}
          >
            {ACTIVITY_TYPES.map((type, idx) => {
              return (
                <option key={idx} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <p className="card-text lead">{friend.activity}</p>
        <p className="card-text">Difficulty: {friend.accessibility * 10} / 10</p>
        <p className="card-text">Cost: {friend.price} / 10</p>
        <button className="btn btn-success" onClick={getNewActivity}>
          Get New Idea
        </button>
      </div>
    </div>
  );
}

export default FriendCard;
