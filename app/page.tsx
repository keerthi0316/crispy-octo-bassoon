'use client'

import { AdminLayout } from '@/components/Layout/AdminLayout'
import { Paper, Title, Text, Button, Group, Stack, Box } from '@mantine/core'
import { IconBriefcase, IconPlus, IconList, IconUsers } from '@tabler/icons-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [jobCount, setJobCount] = useState(0)

  useEffect(() => {
    const fetchJobCount = async () => {
      try {
        const response = await fetch('/api/jobs/count')
        const data = await response.json()
        setJobCount(data.count)
      } catch (error) {
        console.error('Failed to fetch job count:', error)
      }
    }

    fetchJobCount()
  }, [])

  return (
    <AdminLayout>
      <Stack gap="xl">
        <Box>
          <Title order={1} size="h1" mb="sm">
            Job Management Dashboard
          </Title>
          <Text size="lg" c="dimmed">
            Welcome to your job posting administration panel
          </Text>
        </Box>

        <Group grow>
          <Paper p="xl" radius="md" shadow="xs" style={{ textAlign: 'center' }}>
            <Stack gap="md" align="center">
              <IconBriefcase size={48} color="#228be6" />
              <div>
                <Title order={3} size="h2" c="blue">
                  {jobCount}
                </Title>
                <Text c="dimmed">Total Jobs</Text>
              </div>
            </Stack>
          </Paper>

          <Paper p="xl" radius="md" shadow="xs" style={{ textAlign: 'center' }}>
            <Stack gap="md" align="center">
              <IconUsers size={48} color="#40c057" />
              <div>
                <Title order={3} size="h2" c="green">
                  Admin
                </Title>
                <Text c="dimmed">Management Portal</Text>
              </div>
            </Stack>
          </Paper>
        </Group>

        <Paper p="xl" radius="md" shadow="xs">
          <Stack gap="lg">
            <Title order={2}>Quick Actions</Title>
            
            <Group grow>
              <Button
                component={Link}
                href="/jobs/create"
                size="lg"
                leftSection={<IconPlus size={20} />}
                variant="filled"
              >
                Create New Job
              </Button>
              
              <Button
                component={Link}
                href="/jobs"
                size="lg"
                leftSection={<IconList size={20} />}
                variant="light"
              >
                View All Jobs
              </Button>
            </Group>
          </Stack>
        </Paper>

        <Paper p="xl" radius="md" shadow="xs">
          <Title order={2} mb="md">Getting Started</Title>
          <Stack gap="sm">
            <Text>
              • Use the <strong>Create New Job</strong> button to add job postings
            </Text>
            <Text>
              • Navigate to <strong>View All Jobs</strong> to manage existing postings
            </Text>
            <Text>
              • Use filters on the job list page to find specific postings
            </Text>
            <Text>
              • Edit or delete jobs directly from the job cards
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </AdminLayout>
  )
}