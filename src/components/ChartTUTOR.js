import 'chartjs-plugin-labels';

const barData = {
  labels: ['Feb', 'Mar', 'Jun', 'Jul', 'Oct'],
  datasets: [
    {
      label: 'Videos',
      data: [2, 4, 1, 5, 6],
      backgroundColor: "#9370db",
      barPercentage: 0.3,
      pointBorderColor: "#8884d8",
      borderRadius: 5
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins:{legend:{display:true}},
  layout:{padding:{bottom:30, top:30}},
  scales: {
    y:{
      min: 0,
      max: 7,  
      ticks:{
        color:"black",
        font:{
          size:14
        }
      },
      grid:{
        color:"#B5BDD0"
      }
    },
    x:{ 
      ticks:{
        color:"black",
        font:{
          size:14
        }
      },
      grid:{
        color:"transparent"
      }
    }
  },
};

const pieData = {
  
  labels: ['Ciencias Naturales', 'Matemática', 'Ciencias Sociales'],
  datasets: [
    {
      data: [45, 30, 25],
      backgroundColor: ["#9370db", "#ee82ee", '#F58771'],
      hoverOffset: 4
    },
  ],
};

const pieOptions = {
  layout:{padding:{bottom:10, top:20}},
  width: 1000,
  height: 1000,
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    datalabels: {
      color: '#fff',
      anchor: 'end',
      align: 'start',
      offset: -10,
      borderWidth: 2
    }
  },
};

export {barData, barOptions, pieData, pieOptions};