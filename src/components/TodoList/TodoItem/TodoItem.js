import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ text, clickToToogle, clickToDelete, complete }) => {
  return (
    <div className={styles.todoItem}>
      <span
        className={styles.todoItem__text}
        style={{ color: complete ? "green" : "red" }}
      >
        {text}
      </span>
      <div>
        <button className={styles.todoItem__toggleBtn} onClick={clickToToogle}>
          TOGGLE
        </button>
        <button className={styles.todoItem__deleteBtn} onClick={clickToDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
