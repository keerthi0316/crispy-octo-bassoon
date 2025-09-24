import { NextResponse, NextRequest } from 'next/server'
import { getJobById, updateJob, deleteJob } from '@/lib/static-data'
import { jobSchema } from '@/lib/validations'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = getJobById(params.id)

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error fetching job:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    const validatedData = jobSchema.parse({
      ...body,
      applicationDeadline: new Date(body.applicationDeadline),
    })

    const job = updateJob(params.id, {
      ...validatedData,
      applicationDeadline: validatedData.applicationDeadline.toISOString(), // ✅ convert to string
    })

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error updating job:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation failed', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const success = deleteJob(params.id)

    if (!success) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Job deleted successfully' })
  } catch (error) {
    console.error('Error deleting job:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
