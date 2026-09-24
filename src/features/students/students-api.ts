import { apiFetch } from '@/lib/api'

/**
 * Student returned by the College Admin Students API.
 *
 * These fields match the backend StudentListResponse.
 */
export interface StudentListItem {
  id: number
  fullName: string
  email: string
  mobile: string | null
  rollNumber: string
  registrationNumber: string | null
  departmentId: number
  departmentName: string
  departmentCode: string
  semesterNumber: number | null
  semesterName: string | null
  sectionName: string | null
  academicSessionName: string | null
  status: string
}

/**
 * Fetch all students belonging to the logged-in College Admin's college.
 */
export async function getStudents(): Promise<StudentListItem[]> {
  const response = await apiFetch('/api/v1/college-admin/students')

  if (!response.ok) {
    throw new Error(`Failed to fetch students (${response.status})`)
  }

  return response.json() as Promise<StudentListItem[]>
}