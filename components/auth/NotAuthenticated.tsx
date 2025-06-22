import Link from "next/link";

export default function NotAuthenticatedPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4'>
      <div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center'>
        <h1 className='text-4xl font-bold'>Coupanvalley</h1>
        <h1 className='text-xl font-semibold mb-4 mt-4 text-red-500'>🔒 Access Denied</h1>
        <p className='mb-6 text-lg'>You must be logged in to view this page.</p>
        <Link
          href='/sign-in'
          className='inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
