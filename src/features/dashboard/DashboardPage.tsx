import { Button } from '@/components/ui'

export function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard placeholder. Real content comes later.</p>

      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </div>
  )
}