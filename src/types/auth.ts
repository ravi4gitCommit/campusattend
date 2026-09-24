export type Role = 'super_admin' | 'college_admin' | 'hod' | 'teacher' | 'student'

export interface AppUser {
  id: string
  collegeId: number | null
  role: Role
  fullName: string
  email: string
  mobile: string | null
  status: string
}