import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/" className="rounded border px-4 py-2">
        홈으로 이동
      </Link>
    </main>
  );
}
