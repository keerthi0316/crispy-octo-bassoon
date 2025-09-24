'use client'

import { useState } from 'react'
import {
  Paper, TextInput, Textarea, Select,
  Button, Group, Stack, Title, Box, NumberInput
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { jobSchema, JobFormData } from '@/lib/validations'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/navigation'

const jobTypes = [
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Part-time', label: 'Part-time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Internship', label: 'Internship' },
]

export function JobForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, control, watch, setValue, formState: { errors }, reset } =
    useForm<JobFormData>({ resolver: zodResolver(jobSchema) })

  const onSubmit = async (data: JobFormData) => {
    setIsSubmitting(true)

    try {
      // combine min/max into a single string for API
      const payload = {
        ...data,
        salaryRange: `₹${data.salaryMin} - ₹${data.salaryMax}`,
        applicationDeadline: data.applicationDeadline.toISOString(),
      }

      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        notifications.show({ title: 'Success', message: 'Job created', color: 'green' })
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
      <Title order={3} ta="center" mb="xl">Create Job Opening</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="md">
          <Group grow>
            <TextInput label="Job Title" placeholder="Full Stack Developer"
              {...register('title')} error={errors.title?.message} />
            <TextInput label="Company Name" placeholder="Amazon"
              {...register('companyName')} error={errors.companyName?.message} />
          </Group>

          <Group grow>
            <TextInput label="Location" placeholder="Chennai"
              {...register('location')} error={errors.location?.message} />
            <Select label="Job Type" placeholder="Select" data={jobTypes}
              value={watch('jobType')} onChange={v => setValue('jobType', v as any)}
              error={errors.jobType?.message} />
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
                      placeholder="₹0" {...field} min={0} step={10000}
                    />
                  )}
                />
                <Controller
                  name="salaryMax"
                  control={control}
                  render={({ field }) => (
                    <NumberInput
                      placeholder="₹12,00,000" {...field} min={0} step={10000}
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
                  placeholder="Pick a date"
                  value={field.value ? new Date(field.value) : null}
                  onChange={(val) => field.onChange(val)}
                  error={errors.applicationDeadline?.message}
                  leftSection={<IconCalendar size={18} stroke={1.5} />}
                />
              )}
            />
          </Group>

          <Textarea
            label="Job Description" placeholder="Job description..."
            {...register('description')} error={errors.description?.message} />
          <Textarea
            label="Requirements" placeholder="Requirements..."
            {...register('requirements')} error={errors.requirements?.message} />
          <Textarea
            label="Responsibilities" placeholder="Responsibilities..."
            {...register('responsibilities')} error={errors.responsibilities?.message} />

          <Group justify="space-between" mt="lg">
            <Button variant="outline" color="black" type="button" onClick={() => reset()} disabled={isSubmitting}>
              Save Draft
            </Button>
            <Button type="submit" loading={isSubmitting}>  »</Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  )
}
