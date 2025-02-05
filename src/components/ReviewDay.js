// components/ReviewDay.js
import React from "react";
import { motion } from "framer-motion";

const ReviewDay = ({ tasks }) => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="subtitle">Review Your Day</h2>
      <h3>Completed Tasks</h3>
      <ul>
        {tasks
          .filter((task) => task.completed)
          .map((task, index) => (
            <li key={index} className="task-item completed">
              {task.name}
            </li>
          ))}
      </ul>
    </motion.div>
  );
};

export default ReviewDay;
