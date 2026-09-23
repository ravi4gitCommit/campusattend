import { NavLink } from 'react-router-dom'

import { PRIMARY_NAVIGATION } from '@/constants/navigation'

import './styles/sidebar.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">CampusAttend</div>

      <nav>
        <ul className="sidebar__nav">
          {PRIMARY_NAVIGATION.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}