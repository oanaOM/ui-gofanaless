import dashboard from "./dashboard.json";
import axios from "axios";

const URL = "http://localhost:3000/api/dashboards/db";
const base64 = btoa("admin:militate_missive_rack");

export const GrafanaDashboardButton = () => {
  const handleOnClick = () => {
    fetch(URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJrIjoiS3J5ZDEwZTdVdENwT3dLbHBPSjJocTJWTllVMVB6Zk8iLCJuIjoidWktcmVhY3QiLCJpZCI6MX0=",
      },
      body: JSON.stringify(dashboard),
    });
  };
  return <button onClick={handleOnClick}>Generate dashboard</button>;
};
