import { prisma } from 'db';

export async function GET() {
  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  });
}
