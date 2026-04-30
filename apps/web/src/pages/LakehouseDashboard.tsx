import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Database, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Layers,
  ShieldCheck
} from 'lucide-react';

const pipelineExecutionData = [
  { time: '00:00', success: 45, failure: 2 },
  { time: '04:00', success: 52, failure: 1 },
  { time: '08:00', success: 85, failure: 5 },
  { time: '12:00', success: 65, failure: 3 },
  { time: '16:00', success: 95, failure: 0 },
  { time: '20:00', success: 75, failure: 2 },
];

const dataStorageBreakdown = [
  { name: 'Gold (Refined)', value: 40, color: '#6366f1' },
  { name: 'Silver (Transformed)', value: 35, color: '#818cf8' },
  { name: 'Bronze (Raw)', value: 20, color: '#a5b4fc' },
  { name: 'Staging', value: 5, color: '#c7d2fe' },
];

const KPI_CARDS = [
  { title: 'Total Datasets Managed', value: '1.4k', trend: '+12% MoM', color: 'indigo', icon: Database },
  { title: 'Processing Throughput', value: '45 GB/s', trend: '+5.2% QoQ', color: 'indigo', icon: Zap },
  { title: 'Data Quality Score', value: '98.4%', trend: 'Healthy', color: 'indigo', icon: Activity },
  { title: 'Compliance Coverage', value: '100%', trend: 'Audit Ready', color: 'indigo', icon: ShieldCheck },
];

const LakehouseDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Data Lakehouse Intelligence</h1>
          <p className="text-slate-400">Institutional Lakehouse provisioning and multi-cloud data governance.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Provision New Compute
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Trigger Ingestion Pipeline
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-indigo-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-indigo-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pipeline Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Pipeline Execution Velocity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={pipelineExecutionData}>
                <defs>
                  <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="success" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorSuccess)" name="Successful Tasks" />
                <Area type="monotone" dataKey="failure" stroke="#ef4444" strokeWidth={2} fillOpacity={0} name="Failed Tasks" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Data Tiering Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Lakehouse Data Tiering</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataStorageBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataStorageBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {dataStorageBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Registry Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Data Catalog Registry</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View Schema Evolution</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Dataset / Table</th>
                <th className="px-6 py-4 font-semibold">Format</th>
                <th className="px-6 py-4 font-semibold">Governance Tier</th>
                <th className="px-6 py-4 font-semibold">Quality Status</th>
                <th className="px-6 py-4 font-semibold">Lineage Depth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'customer_transactions', format: 'DELTA', tier: 'Tier 0 (Sensitive)', quality: 'Passed', depth: '4 Levels' },
                { name: 'product_catalog_v2', format: 'ICEBERG', tier: 'Tier 1 (Core)', quality: 'Warning', depth: '2 Levels' },
                { name: 'clickstream_raw', format: 'PARQUET', tier: 'Tier 2 (Internal)', quality: 'Passed', depth: '1 Level' },
              ].map((ds) => (
                <tr key={ds.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{ds.name}</span>
                      <span className="text-xs text-slate-500 font-mono">DB: production_lakehouse</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <span className="bg-slate-800 px-2 py-1 rounded text-xs font-mono">{ds.format}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 italic">{ds.tier}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      ds.quality === 'Passed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {ds.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{ds.depth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LakehouseDashboard;
