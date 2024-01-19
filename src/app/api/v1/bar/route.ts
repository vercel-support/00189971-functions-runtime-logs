export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  console.log('test');
  console.log(process.env.NEXT_PUBLIC_SENTRY_DSN);

  return Response.json({});
}
