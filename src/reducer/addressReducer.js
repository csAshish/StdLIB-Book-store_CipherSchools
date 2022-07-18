import {
	getTask,
	updateStorage,
} from "../services/addressServices/updateStorage";
export const addressReducer = (addressState, action) => {
	switch (action.type) {
		case "ADD-TASK": {
			const updatedTasks = {
				...addressState,
				tasks: [...addressState.tasks, action.payload],
			};
			updateStorage(updatedTasks.tasks);
			return updatedTasks;
		}
		case "DELETE-TASK": {
			const updatedTasks = {
				...addressState,
				tasks: addressState.tasks.filter((task) => task.id !== action.payload),
			};
			updateStorage(updatedTasks.tasks);
			return updatedTasks;
		}
		case "EDIT-TASK": {
			const updatedTasks = {
				...addressState,
				tasks: addressState.tasks.map((task) =>
					task.id === action.payload.id
						? {
								...task,
								name: action.payload.name,
								street: action.payload.street,
								city: action.payload.city,
								zipcode: action.payload.zipcode,
								state: action.payload.state,
								country: action.payload.country,
								mobile: action.payload.mobile,
						  }
						: task
				),
			};
			updateStorage(updatedTasks.tasks);
			return updatedTasks;
		}
		case "UPDATE-FROM-LOCALSTORAGE": {
			const initalTask = getTask();
			return { ...addressState, tasks: [...initalTask] };
		}
		case "SET_DUMMY_ADDR": {
			const updatedTasks = {
				...addressState,
				tasks: [...addressState.tasks, action.payload],
			};
			updateStorage(updatedTasks.tasks);
			return updatedTasks;
		}
		default:
			return addressState;
	}
};
