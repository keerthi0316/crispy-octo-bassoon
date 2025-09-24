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

interface JobCardProps {
  job: Job
  onApply?: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
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
      p="lg"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Top Row: Company Logo + Posted Time */}
      <Group justify="space-between" mb="sm">
        <Avatar src={job.companyLogo} size="lg" radius="xl" />
        <Badge color="blue" variant="light">
          {formatTimeAgo(job.createdAt)}
        </Badge>
      </Group>

      {/* Job Title */}
      <Text fw={600} size="lg" mb="xs">
        {job.title}
      </Text>

      {/* Experience, Location, Salary */}
      <Group gap="xs" mb="sm">
        <IconUserPlus size={14} stroke={1.5} color="#666" />
        <Text size="sm" c="dimmed">{job.experience}</Text>
        <IconBuildings size={14} color="#666" />
        <Text size="sm" c="dimmed">{job.location}</Text>
        <IconStack2 size={14} color="#666" />
        <Text size="sm" c="dimmed">{job.salaryRange}</Text>
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
      <Text size="sm" c="dimmed" mb="sm" lineClamp={3}>
        {job.description}
      </Text>
      </List>

      {/* Apply Button */}
      <Button
        fullWidth
        radius="md"
        color="blue"
        onClick={() => onApply(job.id)}
      >
        Apply Now
      </Button>
    </Card>
  )
}
