import { createContext, useContext, useReducer } from "react";
import { addressReducer } from "../reducer/addressReducer";

const initialTaskData = {
	tasks: [],
};

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
	const [addressState, addressDispatch] = useReducer(
		addressReducer,
		initialTaskData
	);
	return (
		<TaskContext.Provider value={{ addressState, addressDispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

const useTask = () => useContext(TaskContext);

export { useTask, TaskProvider };
