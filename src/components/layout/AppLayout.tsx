import { Outlet } from 'react-router-dom'

import { Sidebar } from './Sidebar'

import './styles/app-layout.css'

export function AppLayout() {
  return (
    <div>
      <Sidebar />

      <div className="app-layout__main">
        <main className="app-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}