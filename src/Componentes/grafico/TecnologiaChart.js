import React, { useEffect, useRef } from 'react';
import 'chart.js';

const TecnologiaChart = ({ dados }) => {
  const canvasRef = useRef();
  let chart = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Destrua o gráfico anterior antes de criar um novo
    if (chart) {
      chart.destroy();
    }

    chart = new window.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: dados.map((tecnologia) => tecnologia.nome),
        datasets: [
          {
            data: dados.map((tecnologia) => tecnologia.percentual),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Manter a proporção de aspecto padrão
        aspectRatio: false, // Pode ajustar conforme necessário
        tooltips: {
          callbacks: {
            title: (tooltipItem, data) => {
              // Use o índice do tooltipItem para obter o nome da tecnologia correspondente
              const index = tooltipItem[0].index;
              return dados[index].nome;
            },
            label: (tooltipItem, data) => {
              // Use o índice do tooltipItem para obter o percentual da tecnologia correspondente
              const index = tooltipItem.index;
              return `Percentual: ${dados[index].percentual}%`;
            },
          },
        },
        legend: {
          onClick: null, // Remova a função de clique padrão
        },
        onClick: (e, legendItem) => {
          // Use o objeto 'legendItem' para obter informações sobre a legenda clicada
          if (legendItem && legendItem.text) {
            const index = chart.data.labels.indexOf(legendItem.text);
            alert(`Clicou na legenda de ${dados[index].nome}`);
          }
        },
      },
    });

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [dados]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh', // Altura mínima da visualização
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default TecnologiaChart;
