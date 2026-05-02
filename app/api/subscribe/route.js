export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return Response.json({ error: 'Email is required' }, { status: 400 });
  }

  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.KIT_API_KEY,
        email,
      }),
    }
  );

  const data = await res.json();

  if (res.ok) {
    return Response.json({ success: true });
  }

  console.error('Kit error:', data);
  return Response.json({ error: 'Kit error', detail: data }, { status: 500 });
}
