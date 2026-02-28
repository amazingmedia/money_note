'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignIn = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard') // Login အောင်မြင်ရင် Dashboard ကိုသွားမယ်
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#030712] p-8">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl font-extrabold mb-2 text-yellow-400">mnote001</h1>
        <p className="text-slate-500 text-xs uppercase tracking-[0.3em] mb-12">Cloud Finance Portfolio</p>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full bg-[#1f2937] border border-[#374151] text-white p-3 rounded-xl outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full bg-[#1f2937] border border-[#374151] text-white p-3 rounded-xl outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold active:scale-95 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  )
}
