'use client'

import { useEffect, useState } from 'react'
import {
  Paper,
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  Stack,
  Title,
  Box,
  NumberInput
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { jobSchema, JobFormData } from '@/lib/validations'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/navigation'
import { IconChevronsDown, IconCalendar, IconChevronDown, IconArrowsUpDown } from '@tabler/icons-react'

const jobTypes = [
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Part-time', label: 'Part-time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Internship', label: 'Internship' }
]

export function AlwaysVisibleButton({ children, ...props }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button
        type="submit"
        styles={{
          root: {
            opacity: 0,
            pointerEvents: 'none', // avoid clicks on SSR
          },
        }}
        {...props}
      >
        {children}
      </Button>
    )
  }

    // Render the real button after hydration
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  )
}

// export function AlwaysVisibleButton({ children, ...props }) {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => setMounted(true), [])

//   if (!mounted) return null

//   return <Button type="submit" {...props}>{children}</Button>
// }

export function JobForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
    reset
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema)
  })

  const onSubmit = async (data: JobFormData) => {
    console.log(data)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        notifications.show({
          title: 'Success',
          message: 'Job created successfully',
          color: 'green',
        })
        // reset({
        //   ...data,
        //   applicationDeadline: data.applicationDeadline ? new Date(data.applicationDeadline) : null,
        // })
        reset()
        router.push('/jobs')
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to create job')
      }
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error instanceof Error ? error.message : 'Failed to create job',
        color: 'red',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Paper p="xl" radius="md" maw={700} mx="auto">
      <Title order={3} ta="center" mb="xl">
        Create Job Opening
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="md">
          {/* Top Row - Job Title & Company */}
          <Group grow>
            <TextInput
              label="Job Title"
              placeholder="Full Stack Developer"
              {...register('title')}
              error={errors.title?.message}
              
            />
            <TextInput
              label="Company Name"
              placeholder="Amazon, Microsoft, Swiggy"
              {...register('companyName')}
              error={errors.companyName?.message}
              
            />
          </Group>

          {/* Second Row - Location & Job Type */}
          <Group grow>
<Select
  label="Location"
  placeholder="Choose Preferred Location"
  data={[
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Remote', label: 'Remote' },
  ]}
  value={watch('location')}
  onChange={(value) => setValue('location', value || '')}
  error={errors.location?.message}
  rightSection={<IconChevronDown size={16} stroke={1.5} />}
/>

            <Select
              label="Job Type"
              placeholder="FullTime"
              data={jobTypes}
              value={watch('jobType')}
              onChange={(value) => setValue('jobType', value as any)}
              error={errors.jobType?.message}
              rightSection={<IconChevronDown size={16} stroke={1.5}/>}
            />
          </Group>
          <Group grow align="end">
            <Box w="100%">
              <label style={{ fontSize: 14, fontWeight: 500, marginBottom: 4, display: 'block' }}>Salary Range</label>
              <Group grow>
                <Controller
                  name="salaryMin"
                  control={control}
                  render={({ field }) => (
                    <NumberInput
                    hideControls  
                    placeholder="₹0" {...field} min={0} step={10000}
                    leftSection={<IconArrowsUpDown size={16} stroke={1.5} />}
                    />
                  )}
                />
                <Controller
                  name="salaryMax"
                  control={control}
                  render={({ field }) => (
                    <NumberInput
                      hideControls
                      placeholder="₹12,00,000" {...field} min={0} step={10000}
                    leftSection={<IconArrowsUpDown size={16} stroke={1.5} />}
                    />
                  )}
                />
              </Group>
            </Box>

            <Controller
              name="applicationDeadline"
              control={control}
              render={({ field }) => (
                <DateInput
                  label="Application Deadline"
                  placeholder=""
                  value={field.value ? new Date(field.value) : null}
                  onChange={(val) => field.onChange(val)}
                  error={errors.applicationDeadline?.message}
                  rightSection={<IconCalendar size={18} stroke={1.5} />}
                />
              )}
            />
          </Group>

          {/* Job Description */}
          <Textarea
            label="Job Description"
            placeholder="Please share a description to let the candidate know more about the job role"
            rows={4}
            {...register('description')}
            error={errors.description?.message}
            
          />

          {/* Actions */}
          <Group justify="space-between" mt="lg">
            <Button
              variant="outline"
              color='black'
              type="button"
              onClick={() => reset()}
              disabled={isSubmitting}
               rightSection={
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 0 }}>
      <IconChevronsDown size={12} stroke={2} />
    </div>}
            >
              Save Draft  
            </Button>
            {/* <Button  className='bg-blue text-primary-foreground'>
              Publish »
            </Button> */}
                  {/* <AlwaysVisibleButton type="submit" loading={isSubmitting}
              styles={{
                root: {
                  opacity: 1,
                  transition: 'none',
                  backgroundColor: '#00AAFF', // your primary bg
                  color: '#fff',
                },
              }}
            
            >
              Publish »
            </AlwaysVisibleButton> */}
            {/* <Button type="submit">Publish Test</Button> */}
<AlwaysVisibleButton
  loading={isSubmitting}
  styles={{
    root: {
      opacity: 1,
      transition: 'none',
      backgroundColor: '#00AAFF',
      color: '#fff',
    },
  }}
>
  Publish »
</AlwaysVisibleButton>

          </Group>
        </Stack>
      </form>
    </Paper>
  )
}