const chart = document.getElementById('chart');
drawChart();
async function drawChart() {
const result = await getGraphData();
new Chart(chart, {
    type: 'line',
    data: {
        labels: result.dataX,
        datasets: [{
            label: 'Zonal annual means',
            data: result.dataY,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}) 
}

let promiseResponse;

async function getGraphData() {
    let dataX = [], dataY = [];
    promiseResponse = await fetch('./data.csv');
    const promiseText = await promiseResponse.text();
    const dataArray = promiseText.split('\n').splice(1);
    for(let i of dataArray) {
        dataX.push(i.split(',')[0]);
        dataY.push(i.split(',')[1]);
    }
    return {"dataX": dataX, "dataY": dataY};
}