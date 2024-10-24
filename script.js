document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
    checkbox.addEventListener('change', updateTaskChart);
});

function updateTaskChart() {
    let completedTasks = document.querySelectorAll('input[type=checkbox]:checked').length;
    let totalTasks = document.querySelectorAll('input[type=checkbox]').length;

    let ctx = document.getElementById('taskChart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                label: 'Tasks',
                data: [completedTasks, totalTasks - completedTasks],
                backgroundColor: ['#33cc33', '#ff6666']
            }]
        }
    });
}
