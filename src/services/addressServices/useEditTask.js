import { useTask } from "../../Context/address-context";

function useEditTask() {
	const { addressDispatch } = useTask();

	function editTask(currentTask, setIsEditing) {
		addressDispatch({ type: "EDIT-TASK", payload: currentTask });
		setIsEditing((prevValue) => ({ ...prevValue, value: false, data: {} }));
	}
	return { editTask };
}

export { useEditTask };
