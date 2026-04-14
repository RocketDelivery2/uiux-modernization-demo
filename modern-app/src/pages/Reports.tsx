import PageHeader from '../components/PageHeader'

const monthlyData = [
  { month: 'Jan 2024', orders: 412,  revenue: '$98,440', avg: '$238.93', growth: '+8.2%',  positive: true  },
  { month: 'Dec 2023', orders: 381,  revenue: '$90,990', avg: '$238.82', growth: '+3.1%',  positive: true  },
  { month: 'Nov 2023', orders: 370,  revenue: '$88,220', avg: '$238.43', growth: '-1.4%',  positive: false },
  { month: 'Oct 2023', orders: 375,  revenue: '$89,470', avg: '$238.59', growth: '+5.7%',  positive: true  },
  { month: 'Sep 2023', orders: 355,  revenue: '$84,640', avg: '$238.42', growth: '+2.3%',  positive: true  },
  { month: 'Aug 2023', orders: 347,  revenue: '$82,742', avg: '$238.45', growth: '+1.1%',  positive: true  },
]

const topProducts = [
  { name: 'Widget Pro',      units: 823, revenue: '$287,227', share: 52 },
  { name: 'Premium Support', units: 204, revenue: '$122,196', share: 23 },
  { name: 'Connector Kit',   units: 744, revenue: '$96,096',  share: 18 },
  { name: 'Widget Basic',    units: 511, revenue: '$45,479',  share: 7  },
]

export default function Reports() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        subtitle="Revenue and performance analytics"
        actions={
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Export CSV
            </button>
            <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Print
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Monthly Revenue */}
        <div className="xl:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-sm font-semibold text-gray-900">Monthly Revenue Summary</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {monthlyData.map(row => (
                  <tr key={row.month} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.month}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.orders}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.revenue}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.avg}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold ${row.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {row.growth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-sm font-semibold text-gray-900">Top Products</h2>
          </div>
          <div className="p-6 space-y-5">
            {topProducts.map(p => (
              <div key={p.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-gray-900">{p.name}</span>
                  <span className="text-sm text-gray-500">{p.revenue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${p.share}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-8 text-right">{p.share}%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{p.units} units sold</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
