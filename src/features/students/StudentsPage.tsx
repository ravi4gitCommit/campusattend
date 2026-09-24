import { useEffect, useState } from 'react'

import { getStudents, type StudentListItem } from './students-api'
import './StudentsPage.css'

export function StudentsPage() {
  const [students, setStudents] = useState<StudentListItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadStudents() {
      try {
        setLoading(true)
        setError(null)

        const data = await getStudents()
        setStudents(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load students')
      } finally {
        setLoading(false)
      }
    }

    loadStudents()
  }, [])

  // Filter students based on the search text.

  const filteredStudents = students.filter((student) => {
    const query = searchQuery.trim().toLowerCase()
  
    const matchesSearch =
      !query ||
      student.fullName.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query) ||
      student.rollNumber.toLowerCase().includes(query) ||
      (student.registrationNumber?.toLowerCase().includes(query) ?? false) ||
      student.departmentCode.toLowerCase().includes(query)
  
      const matchesDepartment =
      departmentFilter === 'all' ||
      student.departmentCode === departmentFilter
    
    const matchesStatus =
      statusFilter === 'all' ||
      student.status === statusFilter
    
    return matchesSearch && matchesDepartment && matchesStatus
  })


  

  return (
    <section className="students-page">
      {/* Page header */}
      <div className="students-page__header">
        <div>
          <h1>Students</h1>
          <p>Manage students enrolled in your college.</p>
        </div>

        <button type="button" className="students-page__add-button">
          Add Student
        </button>
      </div>

      {/* Search and filter toolbar */}
      <div className="students-page__toolbar">
        <div className="students-page__search">
        <input
        type="search"
        placeholder="Search students..."
        aria-label="Search students"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
/>
        </div>

        <select
         value={departmentFilter}
          onChange={(event) => setDepartmentFilter(event.target.value)}
          aria-label="Filter by department"
        >
         <option value="all">All Departments</option>
          <option value="CSE">CSE</option>
        </select>
        
        <select
         value={statusFilter}
         onChange={(event) => setStatusFilter(event.target.value)}
         aria-label="Filter by status"
        >
        <option value="all">All Status</option>
        <option value="active">Active</option>
         <option value="inactive">Inactive</option>
        </select>
        
      </div>

      {/* Students table */}
      <div className="students-page__table-card">
        {loading && (
          <div className="students-page__state">
            <p>Loading students...</p>
          </div>
        )}

        {error && (
          <div className="students-page__state students-page__state--error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && students.length === 0 && (
          <div className="students-page__state">
            <h3>No students found</h3>
            <p>There are no student records to display.</p>
          </div>
        )}

        {!loading && !error && students.length > 0 && (
          <div className="students-page__table-wrapper">
            <table className="students-page__table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Roll Number</th>
                  <th>Registration Number</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
              {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="students-page__student">
                        <div className="students-page__avatar">
                          {student.fullName.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="students-page__student-name">
                            {student.fullName}
                          </p>
                          <p className="students-page__student-email">
                            {student.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td>{student.rollNumber}</td>

                    <td>
                      {student.registrationNumber ?? '—'}
                    </td>

                    <td>
                      <div className="students-page__department">
                        <span>{student.departmentCode}</span>
                        <small>{student.departmentName}</small>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`students-page__status students-page__status--${student.status}`}
                      >
                        {student.status}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="students-page__action"
                        aria-label={`Open actions for ${student.fullName}`}
                      >
                        ⋯
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Table footer */}
      {!loading && !error && students.length > 0 && (
        <div className="students-page__footer">
          <p>
           Showing <strong>{filteredStudents.length}</strong> students
           </p>
        </div>
      )}
    </section>
  )
}