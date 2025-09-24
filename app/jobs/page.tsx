'use client'

import { useState, useEffect } from 'react'
import { AdminLayout } from '@/components/Layout/AdminLayout'
import { JobFilters, FilterValues } from '@/components/Jobs/JobFilters'
import { JobCard } from '@/components/Jobs/JobCard'
import { 
  Title, 
  SimpleGrid, 
  Text, 
  Loader, 
  Center, 
  Stack,
  Paper,
  Group,
  Badge,
  Container
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/navigation'
import { Job } from '@/lib/static-data'


export default function JobListPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/jobs')
      if (response.ok) {
        const data = await response.json()
        setJobs(data)
        setFilteredJobs(data)
      } else {
        throw new Error('Failed to fetch jobs')
      }
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to load jobs',
        color: 'red',
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const handleFilter = (filters: FilterValues) => {
    let filtered = jobs

    if (filters.title) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(filters.title.toLowerCase())
      )
    }

    if (filters.location) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.jobType) {
      filtered = filtered.filter(job => job.jobType === filters.jobType)
    }

    // Basic salary range filter (assumes salary ranges are in format like "$50,000 - $80,000")
    if (filters.salaryRange[0] > 30000 || filters.salaryRange[1] < 200000) {
      filtered = filtered.filter(job => {
        const salaryMatch = job.salaryRange.match(/\$?([\d,]+)/g)
        if (salaryMatch && salaryMatch.length >= 2) {
          const minSalary = parseInt(salaryMatch[0].replace(/[$,]/g, ''))
          const maxSalary = parseInt(salaryMatch[1].replace(/[$,]/g, ''))
          return minSalary >= filters.salaryRange[0] && maxSalary <= filters.salaryRange[1]
        }
        return true
      })
    }

    setFilteredJobs(filtered)
  }

  const handleClearFilters = () => {
    setFilteredJobs(jobs)
  }

  const handleEdit = (id: string) => {
    router.push(`/jobs/edit/${id}`)
  }

  const handleDelete = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id))
    setFilteredJobs(filteredJobs.filter(job => job.id !== id))
  }

  if (loading) {
    return (
      <AdminLayout>
        <Center h={400}>
          <Loader size="lg" />
        </Center>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
        <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
    <JobFilters onFilter={handleFilter} onClear={handleClearFilters} />
  </div>
      <Stack gap="xl">
<Container size="xl">

        {filteredJobs.length === 0 ? (
          <Paper p="xl" radius="md" shadow="xs" style={{ textAlign: 'center' }}>
            <Text size="lg" c="dimmed">
              No jobs found matching your criteria
            </Text>
            <Text size="sm" c="dimmed" mt="xs">
              Try adjusting your filters or create a new job posting
            </Text>
          </Paper>
        ) : (
          <SimpleGrid
            cols={{ base: 1, md: 2, lg: 4 }}
            spacing="lg"
          >
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </SimpleGrid>
        )}
        </Container>
      </Stack>
    </AdminLayout>
  )
}