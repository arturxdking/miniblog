import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../contexts/AuthContext";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
