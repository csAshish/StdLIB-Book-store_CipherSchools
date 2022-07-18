import { v4 as uuid } from "uuid";
import { useTask } from "../../Context/address-context";

function useAddTask() {
	const { addressDispatch } = useTask();

	function addTask(currentTask) {
		const newTask = {
			id: uuid(),
			...currentTask,
		};

		addressDispatch({ type: "ADD-TASK", payload: newTask });
	}
	return { addTask };
}

export { useAddTask };
