type Status = 'Completed' | 'Pending' | 'Cancelled' | 'Shipping'

const statusStyles: Record<Status, string> = {
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Pending:   'bg-amber-50 text-amber-700 ring-amber-200',
  Cancelled: 'bg-rose-50 text-rose-700 ring-rose-200',
  Shipping:  'bg-blue-50 text-blue-700 ring-blue-200',
}

interface StatusBadgeProps {
  status: Status
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${statusStyles[status]}`}>
      {status}
    </span>
  )
}
