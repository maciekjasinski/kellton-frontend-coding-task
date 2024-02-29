import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.post('/kellton-frontend-coding-task/api/checkout', async ({ request }) => {
    const body = await request.json();
    console.log('Form data', body);
    await delay(2000);
    return HttpResponse.json({ success: true }, { status: 201 });
  }),
];
