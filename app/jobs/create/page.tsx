'use client'

import { AdminLayout } from '@/components/Layout/AdminLayout'
import { JobForm } from '@/components/Jobs/JobForm'

export default function CreateJobPage() {
  return (
    <AdminLayout>
      <JobForm />
    </AdminLayout>
  )
}