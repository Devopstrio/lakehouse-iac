import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LakehouseDashboard from './pages/LakehouseDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Lakehouse Intelligence engine is currently synchronizing multi-cloud metadata catalogs and orchestrating Spark compute clusters. Deep-dive data lineage and governance controls will be fully operational once the metadata crawl is complete.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<LakehouseDashboard />} />
          <Route path="/catalog" element={<Placeholder name="Enterprise Data Catalog" />} />
          <Route path="/pipelines" element={<Placeholder name="Pipeline Orchestration" />} />
          <Route path="/lineage" element={<Placeholder name="End-to-End Data Lineage" />} />
          <Route path="/quality" element={<Placeholder name="Data Quality & Integrity Hub" />} />
          <Route path="/schemas" element={<Placeholder name="Schema Registry & Evolution" />} />
          <Route path="/governance" element={<Placeholder name="Data Governance & Access Control" />} />
          <Route path="/compute" element={<Placeholder name="Spark & Presto Compute Clusters" />} />
          <Route path="/costs" element={<Placeholder name="Data Platform FinOps & Costs" />} />
          <Route path="/settings" element={<Placeholder name="System & RBAC Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
