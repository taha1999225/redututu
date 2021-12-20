import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Todoslice";

const Addtodo = () => {
  const dispatch = useDispatch();
  const [task, settask] = useState({
    id: Math.random(),
    title: "",
    description: "",
    isDone: false,
  });
  return (
    <div className="kek1">
      <div className="add-todo">
        <Form.Control
          size="lg"
          type="text"
          placeholder="what to do"
          onChange={(e) => {
            settask({ ...task, title: e.target.value });
          }}
        />
        <Form.Control size="lg" type="text" placeholder="what to do" />
        <Button
          variant="outline-primary"
          onClick={() => dispatch(addTask(task))}
        >
          Add
        </Button>{" "}
        
      </div>
    </div>
  );
};

export default Addtodo;
