import { NavLink } from 'react-router-dom'

import { PRIMARY_NAVIGATION } from '@/constants/navigation'

export function Sidebar() {
  return (
    <aside>
      <div>CampusAttend</div>

      <nav>
        <ul>
          {PRIMARY_NAVIGATION.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}