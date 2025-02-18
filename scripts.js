function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const alarmTime = document.getElementById('alarmTime').value;
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;
        
        if (alarmTime) {
            const alarmButton = document.createElement('button');
            alarmButton.textContent = 'Set Alarm';
            alarmButton.onclick = () => setAlarm(alarmTime, taskInput.value);
            li.appendChild(alarmButton);
        }

        taskList.appendChild(li);
        taskInput.value = '';
        document.getElementById('alarmTime').value = '';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

function setAlarm(time, task) {
    const now = new Date();
    const alarmDate = new Date();
    const [hours, minutes] = time.split(':');
    alarmDate.setHours(hours, minutes, 0, 0);

    const timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            alert(`Time for: ${task}`);
        }, timeToAlarm);
    } else {
        alert('The alarm time has already passed.');
    }
}
function setAlarm(time, task) {
    const now = new Date();
    const alarmDate = new Date();
    const [hours, minutes] = time.split(':');
    alarmDate.setHours(hours, minutes, 0, 0);

    const timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            alert(`Time for: ${task}`);
            playSound();
        }, timeToAlarm);
    } else {
        alert('The alarm time has already passed.');
    }
}

function playSound() {
    const audio = new Audio('alarm-sound.mp3');
    audio.play();
}
function setAlarm(time, task) {
    const now = new Date();
    const alarmDate = new Date();
    const [hours, minutes] = time.split(':');
    alarmDate.setHours(hours, minutes, 0, 0);

    const timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            alert(`Time for: ${task}`);
            playSound();
            showNotification(task);
        }, timeToAlarm);
    } else {
        alert('The alarm time has already passed.');
    }
}

function showNotification(task) {
    if (Notification.permission === 'granted') {
        new Notification(`Time for: ${task}`);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(`Time for: ${task}`);
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
});