'use client'

import { useState } from 'react'
import {
  TextInput,
  Select,
  RangeSlider,
  Box,
  Flex,
  Divider
} from '@mantine/core'
import { IconMapPin, IconSearch, IconUsers, IconChevronDown } from '@tabler/icons-react'

interface JobFiltersProps {
  onFilter: (filters: FilterValues) => void
  onClear?: () => void
}

export interface FilterValues {
  title: string
  location: string
  jobType: string
  salaryRange: [number, number]
}

const jobTypes = [
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Part-time', label: 'Part-time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Internship', label: 'Internship' }
]

const locations = [
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Remote', label: 'Remote' }
]

export function JobFilters({ onFilter }: JobFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    title: '',
    location: '',
    jobType: '',
    salaryRange: [50000, 80000]
  })

  const handleFilterChange = (key: keyof FilterValues, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilter(newFilters)
  }

  return (
    <Flex
      align="center"
      wrap="nowrap"
      style={{
        backgroundColor: '#fff',
        borderRadius: '0',
        borderTop: 'none',
        padding: '0.5rem 12rem 0.5rem 14rem',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.08)',
        width: '100vw',
        marginTop:0,
        marginBottom:30
        
      }}
    >
      {/* Search */}
      <Box style={{ flex: 1 }}>
        <TextInput
          placeholder="Search By Job Title, Role"
          value={filters.title}
          onChange={(e) => handleFilterChange('title', e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
          variant="unstyled"
        />
      </Box>

      <Divider orientation="vertical" />

      {/* Location */}
<Box style={{ flex: 1 }}>
  <Select
    placeholder="Preferred Location"
    data={locations}
    value={filters.location}
    onChange={(value) => handleFilterChange('location', value || '')}
    clearable={false} // remove the "x" clear button
    leftSection={<IconMapPin size={16} />}
    rightSection={<IconChevronDown size={16} />} // custom down arrow
    variant="unstyled"
  />
</Box>

<Divider orientation="vertical" />

{/* Job Type */}
<Box style={{ flex: 1 }}>
  <Select
    placeholder="Job Type"
    data={jobTypes}
    value={filters.jobType}
    onChange={(value) => handleFilterChange('jobType', value || '')}
    clearable={false}
    leftSection={<IconUsers size={16} />}
    rightSection={<IconChevronDown size={16} />} // custom down arrow
    variant="unstyled"
  />
</Box>


      <Divider orientation="vertical" />

      {/* Salary Range */}
<Box style={{ flex: 1, paddingLeft: 30 }}>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 10,
      color: '#000'
    }}
  >
    <span>Salary Per Month</span>
    <span>₹50k – ₹80k</span>
  </div>

  <RangeSlider
    min={50000}
    max={100000}
    step={5000}
    value={filters.salaryRange}
    onChange={(value) => handleFilterChange('salaryRange', value)}
    styles={{
      track: {
        height: 2,
        width: 220, 
        backgroundColor: '#e5e5e5'
      },
      bar: {
        height: 2,
        backgroundColor: '#000'
      },
      thumb: {
        width: 15,
        height: 15,
        border: '4.5px solid #000',
        backgroundColor: '#fff',
        boxShadow: 'none'
      },
      markLabel: { display: 'none' }
    }}
  />
</Box>

    </Flex>
  )
}
