// graphs.js
window.onload = function() {
    // Fetch graph data (temperature, humidity, battery) from API
    // Dummy data for now
    const data = {
        temperature: [20, 22, 23, 21, 24],
        humidity: [65, 60, 58, 64, 62],
        battery: [95, 90, 85, 80, 75]
    };

    renderGraphs(data);
}

function renderGraphs(data) {
    const temperatureCtx = document.getElementById("temperature_graph").getContext("2d");
    const humidityCtx = document.getElementById("humidity_graph").getContext("2d");
    const batteryCtx = document.getElementById("battery_graph").getContext("2d");

    // Use a library like Chart.js to render graphs
    new Chart(temperatureCtx, {
        type: 'line',
        data: {
            labels: ['0', '1', '2', '3', '4'],
            datasets: [{
                label: 'Temperature',
                data: data.temperature,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        }
    });

    new Chart(humidityCtx, {
        type: 'line',
        data: {
            labels: ['0', '1', '2', '3', '4'],
            datasets: [{
                label: 'Humidity',
                data: data.humidity,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            }]
        }
    });

    new Chart(batteryCtx, {
        type: 'line',
        data: {
            labels: ['0', '1', '2', '3', '4'],
            datasets: [{
                label: 'Battery',
                data: data.battery,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        }
    });
}
