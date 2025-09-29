'use client'
import { Job } from '@/lib/static-data'
import {
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Button,
  Box,
  Avatar,
  List,
  ThemeIcon
} from '@mantine/core'
import { IconCalendar, IconMapPin, IconBuildings, IconClock, IconBriefcase, IconCurrencyRupee, IconCircleCheck, IconUserPlus, IconStack2 } from '@tabler/icons-react'
import { useState, useEffect } from 'react'

interface JobCardProps {
  job: Job
  onApply?: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export function AlwaysVisibleButton(props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return <Button {...props} />
}
export function JobCard({ job, onApply }: JobCardProps) {
  const formatTimeAgo = (dateString: string) => {
    const diff = Date.now() - new Date(dateString).getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    return `${hours}h Ago`
  }

  return (
    <Card
      shadow="sm"
      radius="md"
      p="md"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Top Row: Company Logo + Posted Time */}
      <Group justify="space-between" mb="xs">
        <Avatar src={job.companyLogo} size="md" radius="xl" />
        <Badge   color="blue"
  variant="light"
  radius="xl"
  size="sm"
  style={{ alignSelf: 'flex-end', marginBottom: '0.5rem' }}
>
  24h Ago
        </Badge>
      </Group>

      {/* Job Title */}
      <Text fw={600} size="md" mb={4}>
        {job.title}
      </Text>

      {/* Experience, Location, Salary */}
      <Group gap={6} mb={6}>
        <IconUserPlus size={12} stroke={1.5} color="#666"  />
        <Text size="xs" c="dimmed">{job.experience}</Text>
        <IconBuildings size={12} color="#666" />
        <Text size="xs" c="dimmed">{job.location}</Text>
        <IconStack2 size={12} color="#666" />
        <Text size="xs" c="dimmed">{job.salaryRange}</Text>
      </Group>

      {/* Description */}
      <List
        size="sm"
        spacing="xs"
        icon={
          <ThemeIcon color="blue" size={16} radius="xl">
            <IconCircleCheck size={12} />
          </ThemeIcon>
        }
        mb="sm"
      >
      <Text size="xs" c="dimmed" mb={8} >
  • A user-friendly interface lets you browse stunning photos and videos <br />
  • Filter destinations based on interests and travel style <br />
</Text>
      </List>

      {/* Apply Button */}
      {/* <Button
        fullWidth
        radius="md"
        style={{opacity: 1}}
         className="opacity-100 !transition-none"
      >
        Apply Now
      </Button> */}
      <AlwaysVisibleButton
  fullWidth
  
  radius="md"
  size="sm"
  style={{ backgroundColor: '#007BFF', color: '#fff'}}
        onClick={() => onApply(job.id)}
>
  Apply Now
</AlwaysVisibleButton>

    </Card>
  )
}
