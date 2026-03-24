import React, { useState } from 'react';

export default function AuthModal({ mode, onClose }) {
  const [m, setM] = useState(mode); // 'signin' | 'join'
  const [form, setForm] = useState({name:'',email:'',password:''});

  if (!mode) return null;

  const handle = (e) => { e.preventDefault(); alert(m==='signin'?'Signed in successfully!':'Account created!'); onClose(); };

  return (
    <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        {m === 'signin' ? (
          <>
            <h2 className="modal-title">Sign In</h2>
            <p className="modal-desc">Enter your email below to sign in to your account</p>
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#333"/><text x="6" y="16" fontSize="10" fill="#333">G</text></svg>
              Continue with Google
            </button>
            <button className="social-btn">🐙 Continue with GitHub</button>
            <div className="divider">Or continue with</div>
            <form onSubmit={handle}>
              <div className="form-field"><label>Email</label><input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></div>
              <div className="form-field"><label>Password</label><input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="••••••••"/></div>
              <button type="submit" className="btn btn-dark" style={{width:'100%',justifyContent:'center',marginTop:8}}>Sign In with Email</button>
            </form>
            <p style={{textAlign:'center',fontSize:13,marginTop:16,color:'var(--gray-500)'}}>
              Don't have an account? <span style={{color:'var(--navy)',cursor:'pointer',fontWeight:600}} onClick={()=>setM('join')}>Join Free</span>
            </p>
          </>
        ) : (
          <>
            <h2 className="modal-title">Create an account</h2>
            <p className="modal-desc">Enter your email below to create your account</p>
            <button className="social-btn">🐙 Continue with GitHub</button>
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#4285F4"/><text x="7" y="16" fontSize="12" fill="white">G</text></svg>
              Continue with Google
            </button>
            <div className="divider">Or continue with</div>
            <form onSubmit={handle}>
              <div className="form-field"><label>Full Name</label><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your Name"/></div>
              <div className="form-field"><label>Email</label><input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></div>
              <div className="form-field"><label>Password</label><input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="••••••••"/></div>
              <button type="submit" className="btn btn-dark" style={{width:'100%',justifyContent:'center',marginTop:8}}>Create Account</button>
            </form>
            <p style={{textAlign:'center',fontSize:13,marginTop:16,color:'var(--gray-500)'}}>
              Already have an account? <span style={{color:'var(--navy)',cursor:'pointer',fontWeight:600}} onClick={()=>setM('signin')}>Sign In</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
