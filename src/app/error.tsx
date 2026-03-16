'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-2xl font-bold">페이지 오류가 발생했습니다.</h2>
      <p className="text-sm opacity-80">{error.message || '알 수 없는 오류입니다.'}</p>
      <button type="button" onClick={reset} className="rounded border px-4 py-2">
        다시 시도
      </button>
    </main>
  );
}
