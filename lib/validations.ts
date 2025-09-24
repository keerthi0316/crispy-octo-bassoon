import { z } from 'zod'

export const jobSchema = z.object({
  title: z.string().min(1, 'Job title is required').max(100),
  companyName: z.string().min(1, 'Company name is required').max(100),
  location: z.string().min(1, 'Location is required').max(100),
  jobType: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship']),
  salaryMin: z.number().min(0, 'Minimum salary must be >= 0'),
  salaryMax: z.number().min(0, 'Maximum salary must be >= 0'),
  description: z.string().min(10).max(2000),
  requirements: z.string().min(10).max(1000),
  responsibilities: z.string().min(10).max(1000),
  applicationDeadline: z.date().refine(date => date > new Date(), {
    message: 'Application deadline must be in the future'
  })
})

export type JobFormData = z.infer<typeof jobSchema>
