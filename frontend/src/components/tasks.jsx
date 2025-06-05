import Button from "../components/button";
import Checkbox from "../components/checkbox";

export default function Tasks({ task, onChange, onClick }) {
  return (
    <div className="flex items-center w-full">
      <Checkbox task={task} onChange={onChange} />
      <span className={`flex-1 px-3 ${task.completed ? "line-through" : ""}`}>
        {task.task}
      </span>
      <Button
        className="ml-auto"
        children="Delete"
        onClick={() => onClick(task.id)}
      />
    </div>
  );
}
