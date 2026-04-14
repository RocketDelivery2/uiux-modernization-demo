import { useState } from 'react'
import PageHeader from '../components/PageHeader'

export default function Settings() {
  const [saved, setSaved] = useState(false)
  const [pwSaved, setPwSaved] = useState(false)

  const [company, setCompany] = useState('Acme Corp')
  const [email, setEmail] = useState('admin@acmecorp.com')
  const [phone, setPhone] = useState('555-0100')
  const [address, setAddress] = useState('123 Business St, Suite 400\nNew York, NY 10001')
  const [timezone, setTimezone] = useState('UTC-5')
  const [currency, setCurrency] = useState('USD')
  const [notifOrders, setNotifOrders] = useState(true)
  const [notifCustomers, setNotifCustomers] = useState(true)
  const [notifReports, setNotifReports] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  function handlePwSave(e: React.FormEvent) {
    e.preventDefault()
    setPwSaved(true)
    setTimeout(() => setPwSaved(false), 2500)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Settings" subtitle="Configure your account and preferences" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Company Settings */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-sm font-semibold text-gray-900">Company Settings</h2>
          </div>
          <form onSubmit={handleSave} className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Company Name</label>
                <input value={company} onChange={e => setCompany(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Admin Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Phone</label>
                <input value={phone} onChange={e => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Timezone</label>
                <select value={timezone} onChange={e => setTimezone(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                  <option value="UTC-5">UTC-5 (Eastern)</option>
                  <option value="UTC-6">UTC-6 (Central)</option>
                  <option value="UTC-7">UTC-7 (Mountain)</option>
                  <option value="UTC-8">UTC-8 (Pacific)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Currency</label>
                <select value={currency} onChange={e => setCurrency(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Address</label>
              <textarea rows={3} value={address} onChange={e => setAddress(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
            </div>

            {/* Notifications */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-3">Email Notifications</p>
              <div className="space-y-2">
                {[
                  { label: 'New Orders', value: notifOrders, set: setNotifOrders },
                  { label: 'New Customers', value: notifCustomers, set: setNotifCustomers },
                  { label: 'Weekly Reports', value: notifReports, set: setNotifReports },
                ].map(n => (
                  <label key={n.label} className="flex items-center gap-3 cursor-pointer">
                    <div
                      onClick={() => n.set(!n.value)}
                      className={`relative w-9 h-5 rounded-full transition-colors cursor-pointer ${n.value ? 'bg-indigo-600' : 'bg-gray-200'}`}
                    >
                      <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${n.value ? 'translate-x-4' : ''}`} />
                    </div>
                    <span className="text-sm text-gray-700">{n.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button type="submit" className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                {saved ? '✓ Saved!' : 'Save Settings'}
              </button>
            </div>
          </form>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-sm font-semibold text-gray-900">Change Password</h2>
          </div>
          <form onSubmit={handlePwSave} className="p-6 space-y-4">
            {['Current Password', 'New Password', 'Confirm New Password'].map(label => (
              <div key={label}>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">{label}</label>
                <input
                  type="password"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}
            <button type="submit" className="w-full py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              {pwSaved ? '✓ Password Updated!' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
