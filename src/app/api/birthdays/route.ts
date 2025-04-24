import { NextResponse, type NextRequest } from 'next/server';

const birthdays: { id: string, name: string, date: Date }[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, date } = body;

    if (!name || !date) {
      return NextResponse.json({ error: 'Name and date are required' }, { status: 400 });
    }

    const newBirthday = {
      id: crypto.randomUUID(),
      name,
      date: new Date(date),
    };

    birthdays.push(newBirthday);
    console.log('Added birthday:', newBirthday); // Log on the server

    return NextResponse.json(newBirthday, { status: 201 });

  } catch (error) {
    console.error('Failed to add birthday:', error);
    return NextResponse.json({ error: 'Failed to add birthday' }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json(birthdays, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch birthdays:', error);
    return NextResponse.json({ error: 'Failed to fetch birthdays' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = new URL(request.url).searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Birthday ID is required' }, { status: 400 });
    }

    const index = birthdays.findIndex(birthday => birthday.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Birthday not found' }, { status: 404 });
    }

    birthdays.splice(index, 1);

    return NextResponse.json({ message: 'Birthday deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete birthday:', error);
    return NextResponse.json({ error: 'Failed to delete birthday' }, { status: 500 });
  }
}
