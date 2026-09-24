import { NavLink, useNavigate } from 'react-router-dom'

import { useAuth } from '@/features/auth'
import { PRIMARY_NAVIGATION } from '@/constants/navigation'

import './styles/sidebar.css'

export function Sidebar() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

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

      {user && (
        <div className="sidebar__footer">
          <p className="sidebar__user-name">{user.fullName}</p>
          <p className="sidebar__user-role">{user.role}</p>
          <button className="sidebar__signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </aside>
  )
}