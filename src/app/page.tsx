'use client';

// If you're using app/page.tsx
export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#2B1C48',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
      }} />
      
      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '600px',
        padding: '2rem'
      }}>
        {/* Logo */}
        <div style={{
          width: '120px',
          height: '120px',
          margin: '0 auto 2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <span style={{ fontSize: '3rem' }}>🚀</span>
        </div>
        
        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #fff, #f0f0f0)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          Coming Soon
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          opacity: '0.9',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          We're working hard to bring you something amazing. 
          <br />
          Stay tuned for the launch!
        </p>
        
        {/* Progress indicator */}
        <div style={{
          width: '200px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '2px',
          margin: '0 auto 2rem',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '60%',
            height: '100%',
            background: 'linear-gradient(90deg, #fff, #f0f0f0)',
            borderRadius: '2px',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '20px',
        height: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '15px',
        height: '15px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `
      }} />
    </main>
  );
}
