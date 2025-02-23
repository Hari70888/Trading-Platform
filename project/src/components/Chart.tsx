import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

interface ChartProps {
  data?: { time: string; value: number }[];
}

export const Chart: React.FC<ChartProps> = ({ data = [] }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: '#1e2235' },
          textColor: '#d1d4dc',
        },
        grid: {
          vertLines: { color: '#2b2b43' },
          horzLines: { color: '#2b2b43' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const lineSeries = chart.addLineSeries({
        color: '#2962FF',
        lineWidth: 2,
      });

      // Sample data if no data provided
      const additionalData = [
        { time: '2023-01-06', value: 1.02950 },
        { time: '2023-01-07', value: 1.03000 },
        { time: '2023-01-08', value: 1.03050 },
      ];
      const sampleData = data.length > 0 ? data : [
        { time: '2023-01-01', value: 1.02876 },
        { time: '2023-01-02', value: 1.02914 },
        { time: '2023-01-03', value: 1.02950 },
        { time: '2023-01-04', value: 1.02890 },
        { time: '2023-01-05', value: 1.02925 },
      ];

      lineSeries.setData(sampleData);
      const additionalLineSeries = chart.addLineSeries({
        color: '#FF2962',
        lineWidth: 2,
      });
      additionalLineSeries.setData(additionalData);
      chartRef.current = chart;

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, [data]);

  return <div ref={chartContainerRef} className="w-full h-96" />;
}
