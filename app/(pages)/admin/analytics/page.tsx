"use client";
// components/Charts.tsx
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import {
  Info,
  Download,
  Users,
  Star,
  Heart,
  MessageCircle,
  Activity,
  DollarSign,
  Search,
} from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../../components/ui/card";

const barLabels = [
  { name: "Jan", count: 111 },
  { name: "Feb", count: 157 },
  { name: "Mar", count: 129 },
  { name: "Apr", count: 150 },
  { name: "May", count: 119 },
  { name: "Jun", count: 72 },
];

const barArgs = {
  type: "bar",
  data: {
    labels: barLabels.map((item) => item.name),
    datasets: [
      {
        label: "Count",
        data: barLabels.map((item) => item.count),
        backgroundColor: "#2563eb",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 16,
        },
      },
      y: {
        grid: {
          color: "#f3f4f6",
          tickLength: 0,
        },
        ticks: {
          padding: 16,
          stepSize: 4,
        },
      },
    },
    plugins: {
      tooltip: {
        titleFont: {
          size: 12,
          weight: "normal",
        },
        boxPadding: 6,
        bodyFont: {
          size: 12,
          weight: "normal",
        },
        displayColors: false,
      },
    },
  },
};

const lineArgs = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Desktop",
        data: [43, 137, 61, 145, 26, 154],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        pointBackgroundColor: "#2563eb",
        pointBorderColor: "#2563eb",
        pointRadius: 6,
      },
      {
        label: "Mobile",
        data: [60, 48, 177, 78, 96, 204],
        borderColor: "#e11d48",
        backgroundColor: "rgba(225, 29, 72, 0.2)",
        pointBackgroundColor: "#e11d48",
        pointBorderColor: "#e11d48",
        pointRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        grid: {
          display: false,
        },
        ticks: {
          padding: 16,
        },
      },
      y: {
        type: "linear",
        grid: {
          color: "#f3f4f6",
          tickLength: 0,
        },
        ticks: {
          padding: 16,
          stepSize: 50,
        },
      },
    },
    plugins: {
      tooltip: {
        titleFont: {
          size: 12,
          weight: "normal",
        },
        bodyFont: {
          size: 12,
          weight: "normal",
        },
        displayColors: false,
      },
    },
  },
};

const Charts = () => {
  const chartRefs = useRef<HTMLCanvasElement[]>([]);
  const charts = useRef<Chart[]>([]);

  useEffect(() => {
    chartRefs.current.forEach((ref, index) => {
      if (ref) {
        const chart = new Chart(ref, index < 5 ? barArgs : lineArgs);
        charts.current.push(chart);
      }
    });

    return () => {
      charts.current.forEach((chart) => chart.destroy());
    };
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="!#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Info className="w-6 h-6" />
            <span className="sr-only">Analytics Dashboard</span>
          </a>
          <a href="!#" className="font-bold">
            Performance
          </a>
          <a href="!#" className="text-muted-foreground">
            User Interactions
          </a>
          <a href="!#" className="text-muted-foreground">
            Revenue
          </a>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search metrics..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="https://g-updece5q5lq.vusercontent.net/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "App Downloads",
              icon: <Download className="w-4 h-4 text-muted-foreground" />,
              value: "+12,234",
              desc: "+19% from last month",
            },
            {
              title: "Active Users",
              icon: <Users className="w-4 h-4 text-muted-foreground" />,
              value: "+2350",
              desc: "+180.1% from last month",
            },
            {
              title: "User Ratings",
              icon: <Star className="w-4 h-4 text-muted-foreground" />,
              value: "4.8",
              desc: "+0.2 from last month",
            },
            {
              title: "User Favorites",
              icon: <Heart className="w-4 h-4 text-muted-foreground" />,
              value: "+573",
              desc: "+201 since last hour",
            },
            {
              title: "User Reviews",
              icon: <MessageCircle className="w-4 h-4 text-muted-foreground" />,
              value: "+1,234",
              desc: "+50 since last week",
            },
            {
              title: "User Engagement",
              icon: <Activity className="w-4 h-4 text-muted-foreground" />,
              value: "+12.5%",
              desc: "+2.1% from last month",
            },
            {
              title: "App Sales Revenue",
              icon: <DollarSign className="w-4 h-4 text-muted-foreground" />,
              value: "$45,231.89",
              desc: "+20.1% from last month",
            },
            {
              title: "Promotion Revenue",
              icon: <DollarSign className="w-4 h-4 text-muted-foreground" />,
              value: "$12,345.67",
              desc: "+15.3% from last month",
            },
            {
              title: "Total Revenue",
              icon: <DollarSign className="w-4 h-4 text-muted-foreground" />,
              value: "$57,577.56",
              desc: "+18.7% from last month",
            },
          ].map(({ title, icon, value, desc }, index) => (
            <Card key={index} className="p-4">
              <CardHeader className="flex items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 flex flex-col">
            <CardHeader className="space-y-1">
              <CardTitle className="text-sm font-medium">
                Number of downloads
              </CardTitle>
            </CardHeader>
            <div className="flex-1">
              <canvas ref={(el) => el && (chartRefs.current[0] = el)} />
            </div>
          </Card>
          <Card className="col-span-3 flex flex-col">
            <CardHeader className="space-y-1">
              <CardTitle className="text-sm font-medium">
                Number of active users
              </CardTitle>
            </CardHeader>
            <div className="flex-1">
              <canvas ref={(el) => el && (chartRefs.current[1] = el)} />
            </div>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 flex flex-col">
            <CardHeader className="space-y-1">
              <CardTitle className="text-sm font-medium">
                User engagement
              </CardTitle>
            </CardHeader>
            <div className="flex-1">
              <canvas ref={(el) => el && (chartRefs.current[2] = el)} />
            </div>
          </Card>
          <Card className="col-span-3 flex flex-col">
            <CardHeader className="space-y-1">
              <CardTitle className="text-sm font-medium">
                Sales revenue
              </CardTitle>
            </CardHeader>
            <div className="flex-1">
              <canvas ref={(el) => el && (chartRefs.current[3] = el)} />
            </div>
          </Card>
        </div>
        <Card className="flex flex-col">
          <CardHeader className="space-y-1">
            <CardTitle className="text-sm font-medium">
              Sales Revenue by device
            </CardTitle>
          </CardHeader>
          <div className="flex-1">
            <canvas ref={(el) => el && (chartRefs.current[4] = el)} />
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Charts;
