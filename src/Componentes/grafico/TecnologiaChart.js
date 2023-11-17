// TecnologiaChart.js
import React, { useEffect, useRef } from 'react';
import 'chart.js';

const TecnologiaChart = ({ dados, onChartClick }) => {
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
            backgroundColor: ['#FF6384', '#36A2EB', '#d3d3d3', '#4CAF50', '#FF9800','#993399'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#d3d3d3', '#4CAF50', '#FF9800','#993399'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        onClick: (event, elements) => {
          // Verifique se há elementos clicados
          if (elements && elements.length > 0) {
            const clickedIndex = elements[0].index;
            const clickedTecnologia = dados[clickedIndex];
            onChartClick(clickedTecnologia);
          }
        },
      },
    });

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [dados, onChartClick]);

  return <canvas ref={canvasRef} />;
};

export default TecnologiaChart;
