document.addEventListener('DOMContentLoaded', () => {
	const taskForm = document.getElementById('taskForm');
	const taskInput = document.getElementById('taskInput');
	const taskDate = document.getElementById('taskDate');
	const taskTime = document.getElementById('taskTime');
	const taskContainer = document.getElementById('taskContainer');
	
	taskForm.addEventListener('submit', function(e) {
		e.preventDefault(); // フォームのデフォルトの送信を防ぐ
		
		const taskText = taskInput.value.trim();
		const taskDay = taskDate.value;
		const taskTimeValue = taskTime.value;

		if (taskText !== "" && taskDay !== "" && taskTimeValue !== "") {
			// タスク項目のコンテナを作成
			const taskItem = document.createElement("div");
			taskItem.className = "task-item";

			// タスク名の表示
			const taskName = document.createElement("span");
			taskName.className = "task-name";
			taskName.textContent = taskText;
			taskItem.appendChild(taskName);

			// 日付の表示
			const taskDateSpan = document.createElement("span");
			taskDateSpan.className = "task-date";
			taskDateSpan.textContent = `日付: ${taskDay}`;
			taskItem.appendChild(taskDateSpan);

			// 時間の表示
			const taskTimeSpan = document.createElement("span");
			taskTimeSpan.className = "task-time";
			taskTimeSpan.textContent = `時間: ${taskTimeValue}`;
			taskItem.appendChild(taskTimeSpan);

			// タスク項目をコンテナに追加
			taskContainer.appendChild(taskItem);

			// 入力フィールドをクリア
			taskInput.value = "";
			taskDate.value = "";
			taskTime.value = "";
		}
	});
});

