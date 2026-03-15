import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:5000'}/api/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, service, message }),
    });

    if (!response.ok) {
      throw new Error('Failed to save inquiry');
    }

    const data = await response.json();

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API - Use POST to submit inquiries' },
    { status: 200 }
  );
}
