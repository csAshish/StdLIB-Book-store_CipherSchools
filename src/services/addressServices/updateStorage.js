export function getTask() {
	return JSON.parse(localStorage.getItem("tasks")) ?? [];
}

export function updateStorage(tasks) {
	localStorage.setItem("tasks", JSON.stringify(tasks));

	return tasks;
}
