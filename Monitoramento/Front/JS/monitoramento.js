document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('consumption-chart').getContext('2d');
    const consumptionData = {
        labels: [],
        datasets: [{
            label: 'Consumo (kWh)',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1
        }]
    };
    const config = {
        type: 'line',
        data: consumptionData,
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: 'Horário' } },
                y: { title: { display: true, text: 'Consumo (kWh)' } }
            }
        }
    };
    const chart = new Chart(ctx, config);

    setInterval(() => {
        const now = new Date().toLocaleTimeString();
        const consumption = Math.random() * 10 + 5;

        consumptionData.labels.push(now);
        consumptionData.datasets[0].data.push(consumption);

        if (consumptionData.labels.length > 10) {
            consumptionData.labels.shift();
            consumptionData.datasets[0].data.shift();
        }

        chart.update();
    }, 5000);
});
