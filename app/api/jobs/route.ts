import { NextResponse, NextRequest } from 'next/server'
import { getAllJobs, createJob, Job } from '@/lib/static-data'
import { jobSchema, JobFormData } from '@/lib/validations'

export async function GET() {
  try {
    const jobs = getAllJobs()
    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = jobSchema.parse({
      ...body,
      applicationDeadline: new Date(body.applicationDeadline),
    }) as JobFormData

    // Build the job object with exact fields required by createJob
    const jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt'> = {
      title: parsed.title,
      companyName: parsed.companyName,
      location: parsed.location,
      jobType: parsed.jobType,
      salaryRange: `₹${parsed.salaryMin} - ₹${parsed.salaryMax}`, // combine min/max
      description: parsed.description,
      requirements: parsed.requirements,
      responsibilities: parsed.responsibilities,
      applicationDeadline: parsed.applicationDeadline.toISOString(),
    }

    const job = createJob(jobData)

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error('Error creating job:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation failed', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

