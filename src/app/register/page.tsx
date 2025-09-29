'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/context/SessionContext';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('STUDENT'); // Default role
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong during registration.');
      }

      if (data.success) {
        login(data.user); // Log the new user in immediately
        router.push('/'); // Redirect to dashboard
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
          <p className="mt-2 text-sm text-gray-600">Join our platform today!</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input
                id="firstName" name="firstName" type="text" required
                value={firstName} onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                id="lastName" name="lastName" type="text" required
                value={lastName} onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email" name="email" type="email" autoComplete="email" required
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password" name="password" type="password" required
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
            />
          </div>
          
          <fieldset>
            <legend className="sr-only">User Role</legend>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center">
                <input id="role-student" name="role" type="radio" value="STUDENT" checked={role === 'STUDENT'} onChange={(e) => setRole(e.target.value)} className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="role-student" className="ml-2 block text-sm font-medium text-gray-700">Student</label>
              </div>
              <div className="flex items-center">
                <input id="role-teacher" name="role" type="radio" value="TEACHER" checked={role === 'TEACHER'} onChange={(e) => setRole(e.target.value)} className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="role-teacher" className="ml-2 block text-sm font-medium text-gray-700">Teacher</label>
              </div>
            </div>
          </fieldset>

          {error && (
            <p className="text-sm text-center text-red-600">{error}</p>
          )}

          <div>
            <button type="submit" disabled={isLoading} className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
