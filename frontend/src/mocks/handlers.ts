import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/checkout', async ({ request }) => {
    const body = await request.json();
    console.log('Form data', body);
    return HttpResponse.json({ success: true }, { status: 201 })
  })
];
