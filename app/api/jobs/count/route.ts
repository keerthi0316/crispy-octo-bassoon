import { NextResponse } from 'next/server'
import { getJobCount } from '@/lib/static-data'

export async function GET() {
  try {
    const count = getJobCount()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error counting jobs:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}