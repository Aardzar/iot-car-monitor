let respuesta = document.getElementById("respuesta");
let intervalId = null;

function callApiRequest(ip) {
    axios.get(`http://${ip}/iot-car-control/back-end/apis/getRegistro.php`)
    .then(function (response) {
        // handle success
        console.log(response);

        let respuestaServidor =
        response.data == 'w' ? "Adelante" :
        response.data == 'a' ? "Izquierda" :
        response.data == 's' ? "Atras" :
        response.data == 'd' ? "Derecha" : "Detener";
        
        respuesta.innerHTML = "Respuesta: <strong>" + respuestaServidor + "</strong>";
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

function startRequests() {
    // Clear any existing intervals
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    
    // Get the IP address from the input field
    let ipAddress = document.getElementById("ip-address").value;
    
    // Set the interval to call the API request every 2 seconds with the given IP
    intervalId = setInterval(function() {
        callApiRequest(ipAddress);
    }, 2000);
}
