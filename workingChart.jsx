import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {
  FormControl,
  MenuItem,
  Select,
  Box,
  InputLabel,
  ButtonGroup,
  Button,
} from "@mui/material";

const mockData = {
  dataset1: {
    data: [
      {
        date: "Jan 2022",
        online: { total: 12, facebook: 6, insta: 6 },
        offline: { total: 8, newspaper: 5, pamphlet: 3 },
        sales: 2.3,
        activity: 1.2,
      },

      {
        date: "Feb 2022",
        online: { total: 60, facebook: 30, insta: 30 },
        offline: { total: 40, newspaper: 20, pamphlet: 20 },
        sales: 3.1,
        activity: 2.1,
      },
      {
        date: "Mar 2022",
        online: { total: 110, facebook: 55, insta: 55 },
        offline: { total: 70, newspaper: 35, pamphlet: 35 },
        sales: 4.2,
        activity: 3.2,
      },
      {
        date: "Apr 2022",
        online: { total: 200, facebook: 100, insta: 100 },
        offline: { total: 150, newspaper: 75, pamphlet: 75 },
        sales: 5.1,
        activity: 4.1,
      },
      {
        date: "May 2022",
        online: { total: 240, facebook: 120, insta: 120 },
        offline: { total: 160, newspaper: 80, pamphlet: 80 },
        sales: 5.3,
        activity: 4.3,
      },
      {
        date: "Jun 2022",
        online: { total: 220, facebook: 110, insta: 110 },
        offline: { total: 150, newspaper: 75, pamphlet: 75 },
        sales: 5.6,
        activity: 4.6,
      },
      {
        date: "Jul 2022",
        online: { total: 80, facebook: 40, insta: 40 },
        offline: { total: 40, newspaper: 20, pamphlet: 20 },
        sales: 4.0,
        activity: 3.0,
      },
      {
        date: "Aug 2022",
        online: { total: 70, facebook: 35, insta: 35 },
        offline: { total: 40, newspaper: 20, pamphlet: 20 },
        sales: 3.7,
        activity: 2.7,
      },
      {
        date: "Sep 2022",
        online: { total: 140, facebook: 70, insta: 70 },
        offline: { total: 60, newspaper: 30, pamphlet: 30 },
        sales: 4.5,
        activity: 3.5,
      },
      {
        date: "Oct 2022",
        online: { total: 90, facebook: 45, insta: 45 },
        offline: { total: 40, newspaper: 20, pamphlet: 20 },
        sales: 3.9,
        activity: 2.9,
      },
      {
        date: "Nov 2022",
        online: { total: 200, facebook: 100, insta: 100 },
        offline: { total: 100, newspaper: 50, pamphlet: 50 },
        sales: 6.1,
        activity: 5.1,
      },
      {
        date: "Dec 2022",
        online: { total: 50, facebook: 25, insta: 25 },
        offline: { total: 40, newspaper: 20, pamphlet: 20 },
        sales: 2.8,
        activity: 1.8,
      },
    ],
    barMetrics: {
      online: {
        color: "#136f63",
        subChannels: { facebook: "#1f77b4", insta: "#ff7f0e" },
      },
      offline: {
        color: "#76c7c0",
        subChannels: { newspaper: "#2ca02c", pamphlet: "#d62728" },
      },
    },
    lineMetrics: {
      sales: { color: "#3caea3" },
      activity: { color: "#ffbb78" },
    },
  },
  dataset2: {
    data: [
      {
        date: "Jan 2022",
        online: { total: 20, facebook: 10, insta: 10 },
        offline: { total: 80, newspaper: 40, pamphlet: 40 },
        sales: 4.3,
        activity: 3.3,
      },
      {
        date: "Feb 2022",
        online: { total: 100, facebook: 50, insta: 50 },
        offline: { total: 70, newspaper: 35, pamphlet: 35 },
        sales: 6.1,
        activity: 5.1,
      },
      {
        date: "Mar 2022",
        online: { total: 50, facebook: 25, insta: 25 },
        offline: { total: 80, newspaper: 40, pamphlet: 40 },
        sales: 5.2,
        activity: 4.2,
      },
      {
        date: "Apr 2022",
        online: { total: 10, facebook: 5, insta: 5 },
        offline: { total: 50, newspaper: 25, pamphlet: 25 },
        sales: 2.1,
        activity: 1.1,
      },
      {
        date: "May 2022",
        online: { total: 340, facebook: 170, insta: 170 },
        offline: { total: 60, newspaper: 30, pamphlet: 30 },
        sales: 4.3,
        activity: 3.3,
      },
      {
        date: "Jun 2022",
        online: { total: 100, facebook: 50, insta: 50 },
        offline: { total: 50, newspaper: 25, pamphlet: 25 },
        sales: 3.6,
        activity: 2.6,
      },
      {
        date: "Jul 2022",
        online: { total: 50, facebook: 25, insta: 25 },
        offline: { total: 140, newspaper: 70, pamphlet: 70 },
        sales: 2.0,
        activity: 1.0,
      },
      {
        date: "Aug 2022",
        online: { total: 25, facebook: 12.5, insta: 12.5 },
        offline: { total: 140, newspaper: 70, pamphlet: 70 },
        sales: 1.7,
        activity: 0.7,
      },
      {
        date: "Sep 2022",
        online: { total: 200, facebook: 100, insta: 100 },
        offline: { total: 160, newspaper: 80, pamphlet: 80 },
        sales: 5.5,
        activity: 4.5,
      },
      {
        date: "Oct 2022",
        online: { total: 300, facebook: 150, insta: 150 },
        offline: { total: 140, newspaper: 70, pamphlet: 70 },
        sales: 5.9,
        activity: 4.9,
      },
      {
        date: "Nov 2022",
        online: { total: 250, facebook: 125, insta: 125 },
        offline: { total: 10, newspaper: 5, pamphlet: 5 },
        sales: 5.1,
        activity: 4.1,
      },
      {
        date: "Dec 2022",
        online: { total: 150, facebook: 75, insta: 75 },
        offline: { total: 140, newspaper: 70, pamphlet: 70 },
        sales: 6.8,
        activity: 5.8,
      },
    ],
    barMetrics: {
      online: {
        color: "#ff7f0e",
        subChannels: { facebook: "#1f77b4", insta: "#ff7f0e" },
      },
      offline: {
        color: "#2ca02c",
        subChannels: { newspaper: "#2ca02c", pamphlet: "#d62728" },
      },
    },
    lineMetrics: {
      sales: { color: "#9467bd" },
      activity: { color: "#8c564b" },
    },
  },
}; // Keep original mock data here

const AmChartComponent = () => {
  const chartRef = useRef(null);
  const [selectedDataset, setSelectedDataset] = useState(
    Object.keys(mockData)[0]
  );
  const [selectedBarMetric, setSelectedBarMetric] = useState(
    Object.keys(mockData[selectedDataset].barMetrics)[0]
  );
  const [selectedLineMetric, setSelectedLineMetric] = useState(
    Object.keys(mockData[selectedDataset].lineMetrics)[0]
  );
  const [selectedView, setSelectedView] = useState("Channel");
  const [channelData, setChannelData] = useState([]);
  const [subChannelData, setSubChannelData] = useState([]);

  useEffect(() => {
    const dataset = mockData[selectedDataset]?.data || [];

    // ✅ Process Data for Channel Mode (total values)
    const processedChannelData = dataset.map((entry) => ({
      date: entry.date,
      [selectedBarMetric]: entry[selectedBarMetric]?.total ?? 0,
      sales: entry.sales,
      activity: entry.activity,
    }));

    // ✅ Process Data for Subchannel Mode (Stacked values)
    const processedSubChannelData = dataset.map((entry) => {
      const subChannels =
        mockData[selectedDataset].barMetrics[selectedBarMetric]?.subChannels ||
        {};
      let newEntry = {
        date: entry.date,
        sales: entry.sales,
        activity: entry.activity,
      };

      Object.keys(subChannels).forEach((sub) => {
        newEntry[sub] = entry[selectedBarMetric]?.[sub] ?? 0;
      });

      return newEntry;
    });

    setChannelData(processedChannelData);
    setSubChannelData(processedSubChannelData);
  }, [selectedDataset, selectedBarMetric]);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, { paddingLeft: 50, paddingRight: 50 })
    );

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, { behavior: "zoomY" })
    );
    cursor.lineX.setAll({
      stroke: am5.color(0x000000),
      strokeWidth: 1,
      strokeOpacity: 0.5,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "date",
        renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 50 }),
      })
    );
    xAxis.get("renderer").labels.template.setAll({
      rotation: -30,
      centerY: am5.p50,
      centerX: am5.p50,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, { renderer: am5xy.AxisRendererY.new(root, {}) })
    );
    const yAxisRight = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, { opposite: true }),
      })
    );

    const createBarSeries = (name, field, color, stacked = false) => {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          categoryXField: "date",
          stacked: stacked,
          tooltip: am5.Tooltip.new(root, { labelText: `${name}: {valueY}` }),
        })
      );

      series.columns.template.setAll({
        fill: am5.color(color),
        stroke: am5.color(color),
        cornerRadiusTL: 10,
        cornerRadiusTR: 10,
        width: am5.percent(60),
      });

      return series;
    };

    const createLineSeries = (name, field, color) => {
      let series = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxisRight,
          valueYField: field,
          categoryXField: "date",
          tooltip: am5.Tooltip.new(root, { labelText: `${name}: {valueY}` }),
        })
      );

      series.strokes.template.setAll({
        strokeWidth: 4,
        stroke: am5.color(color),
        strokeOpacity: 0.9,
        tension: 0.9,
      });

      series.bullets.push(() =>
        am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0xffffff),
            stroke: am5.color(color),
            strokeWidth: 2,
          }),
        })
      );

      return series;
    };

    const dataToUse =
      selectedView === "Sub Channel" ? subChannelData : channelData;

    if (selectedView === "Sub Channel") {
      Object.entries(
        mockData[selectedDataset].barMetrics[selectedBarMetric].subChannels
      ).forEach(([subKey, color]) => {
        createBarSeries(subKey, subKey, color, true);
      });
    } else {
      createBarSeries(
        selectedBarMetric,
        selectedBarMetric,
        mockData[selectedDataset].barMetrics[selectedBarMetric].color
      );
    }

    createLineSeries(
      selectedLineMetric,
      selectedLineMetric,
      mockData[selectedDataset].lineMetrics[selectedLineMetric].color
    );

    xAxis.data.setAll(dataToUse);
    chart.series.values.forEach((series) => {
      series.data.setAll(dataToUse);
    });

    return () => {
      root.dispose();
    };
  }, [
    selectedDataset,
    selectedBarMetric,
    selectedLineMetric,
    selectedView,
    channelData,
    subChannelData,
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Box>
          <InputLabel>Dataset</InputLabel>
          <Select
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
          >
            {Object.keys(mockData).map((dataset) => (
              <MenuItem key={dataset} value={dataset}>
                {dataset}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box>
          <InputLabel>Bar Metric</InputLabel>
          <Select
            value={selectedBarMetric}
            onChange={(e) => setSelectedBarMetric(e.target.value)}
          >
            {Object.keys(mockData[selectedDataset].barMetrics).map((metric) => (
              <MenuItem key={metric} value={metric}>
                {metric}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box>
          <InputLabel>Line Metric</InputLabel>
          <Select
            value={selectedLineMetric}
            onChange={(e) => setSelectedLineMetric(e.target.value)}
          >
            {Object.keys(mockData[selectedDataset].lineMetrics).map(
              (metric) => (
                <MenuItem key={metric} value={metric}>
                  {metric}
                </MenuItem>
              )
            )}
          </Select>
        </Box>

        <ButtonGroup>
          <Button onClick={() => setSelectedView("Channel")}>Channel</Button>
          <Button onClick={() => setSelectedView("Sub Channel")}>
            Sub Channel
          </Button>
        </ButtonGroup>
      </div>

      <div ref={chartRef} style={{ height: "600px", width: "100%" }} />
    </div>
  );
};

export default AmChartComponent;
