import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick, ...props }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <>
      <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full flex items-center gap-2 text-white p-2 rounded-md text-left ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />} 
              {task.title}
            </button>
            <Button
              onClick={() => onSeeDetailsClick(task)}
            >
              <ChevronRightIcon />
            </Button>
            <Button
              onClick={() => onDeleteTaskClick(task.id)}
            >
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;
