// device_status.js
window.onload = function() {
    checkDeviceStatus();
}

function checkDeviceStatus() {
    // Simulate device connection and battery status
    const isConnected = true;  // Change to false to simulate disconnection
    const batteryLevel = 8;    // Set a battery percentage for testing

    const statusElement = document.getElementById("device_status");
    const batteryElement = document.getElementById("battery_status");

    if (isConnected) {
        statusElement.innerHTML = "Device is connected";
    } else {
        statusElement.innerHTML = "Device is disconnected";
        alert("Device is disconnected!");
    }

    if (batteryLevel < 10) {
        batteryElement.innerHTML = `Low battery: ${batteryLevel}%`;
        alert("Battery is below 10%!");
    } else {
        batteryElement.innerHTML = `Battery level: ${batteryLevel}%`;
    }
}
