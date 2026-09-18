function calculateBMI() {
    const weightIn = parseFloat(document.getElementById("weight").value)
    const heightIn = parseFloat(document.getElementById("height").value) / 100
    
    if(weightIn && heightIn) {
        const bmiResult = (weightIn / (heightIn* heightIn)).toFixed(2)
        let category
        if (bmiResult < 18.5) {
            category = "Bajo peso"
        } else if (bmiResult < 25) {
            category = "Peso normal"
        } else if (bmiResult < 30) {
            category = "Sobrepeso"
        } else {
            category = "Obesidad"
        }
        document.getElementById("result").style.color = "#333"
        document.getElementById("result").textContent = `Tu BMI es: ${bmiResult} - ${category}`
    } else {
        document.getElementById("result").style.color = "red"
        document.getElementById("result").textContent = "Por favor introduce valores validos"
    }
    
}