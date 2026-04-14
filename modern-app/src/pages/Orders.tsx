import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'

type Status = 'Completed' | 'Pending' | 'Cancelled' | 'Shipping'

interface Order {
  id: string
  customer: string
  product: string
  qty: number
  amount: string
  status: Status
  date: string
}

const allOrders: Order[] = [
  { id: '#10042', customer: 'James Harlow',  product: 'Widget Pro',      qty: 1, amount: '$349.00',   status: 'Completed', date: 'Jan 14, 2024' },
  { id: '#10041', customer: 'Sandra Ohm',    product: 'Connector Kit',   qty: 2, amount: '$258.00',   status: 'Pending',   date: 'Jan 14, 2024' },
  { id: '#10040', customer: 'Mike Torres',   product: 'Premium Support', qty: 1, amount: '$599.00',   status: 'Completed', date: 'Jan 13, 2024' },
  { id: '#10039', customer: 'Lisa Fontaine', product: 'Widget Basic',    qty: 1, amount: '$89.00',    status: 'Cancelled', date: 'Jan 13, 2024' },
  { id: '#10038', customer: 'Tom Briggs',    product: 'Connector Kit',   qty: 1, amount: '$129.00',   status: 'Shipping',  date: 'Jan 12, 2024' },
  { id: '#10037', customer: 'Amy Chen',      product: 'Widget Pro',      qty: 3, amount: '$1,047.00', status: 'Completed', date: 'Jan 11, 2024' },
]

const statuses: (Status | 'All')[] = ['All', 'Pending', 'Completed', 'Cancelled', 'Shipping']

export default function Orders() {
  const [statusFilter, setStatusFilter] = useState<Status | 'All'>('All')

  const filtered = statusFilter === 'All' ? allOrders : allOrders.filter(o => o.status === statusFilter)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders"
        subtitle="Track and manage all customer orders"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {statuses.map(s => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
              ${statusFilter === s
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-indigo-600">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.qty}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4"><StatusBadge status={order.status} /></td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-gray-50 text-xs text-gray-500">
          Showing {filtered.length} of {allOrders.length} orders
        </div>
      </div>
    </div>
  )
}
