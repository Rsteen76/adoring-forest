// components/SetDailyHabits.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const SetDailyHabits = ({ habits, setHabits }) => {
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([
        ...habits,
        {
          name: newHabit,
          completedDays: [false, false, false, false, false, false, false],
          streak: 0,
        },
      ]);
      setNewHabit("");
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="subtitle">Set Your Daily Habits</h2>
      <input
        className="input-field"
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="New Habit"
      />
      <button className="nav-button" onClick={addHabit}>
        Add Habit
      </button>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} className="task-item">
            {habit.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SetDailyHabits;
