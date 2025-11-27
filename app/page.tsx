export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>

      {/* Background hills */}
      <div style={{
        background: 'url(/anjanedri-bg.png) no-repeat bottom center',
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -3,
      }} />

      {/* Floating clouds */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '-20%',
        width: '200px',
        height: '80px',
        background: 'url(/cloud.png) no-repeat',
        backgroundSize: 'contain',
        animation: 'cloudMove 60s linear infinite',
        zIndex: -2,
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-30%',
        width: '250px',
        height: '100px',
        background: 'url(/cloud.png) no-repeat',
        backgroundSize: 'contain',
        animation: 'cloudMove 80s linear infinite',
        zIndex: -2,
      }} />

      <header style={{ textAlign: 'center', padding: '2rem', color: '#fff', textShadow: '2px 2px 6px #000' }}>
        <h1 style={{ fontSize: '3rem' }}>Anjanedri Hills Visitor Services</h1>
      </header>

      <nav style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="/parking" style={{ margin: '0 1rem', fontSize: '1.5rem' }}>🚗 Parking</a>
        <a href="/restrooms" style={{ margin: '0 1rem', fontSize: '1.5rem' }}>🚻 Restrooms</a>
        <a href="/cafes" style={{ margin: '0 1rem', fontSize: '1.5rem' }}>☕ Cafes</a>
        <a href="/directions" style={{ margin: '0 1rem', fontSize: '1.5rem' }}>🗺️ Directions</a>
        <a href="/emergency" style={{ margin: '0 1rem', fontSize: '1.5rem' }}>🆘 Emergency Help</a>
      </nav>

      <section style={{ textAlign: 'center', marginTop: '4rem', color: '#fff', textShadow: '1px 1px 4px #000' }}>
        <h2>Welcome Visitors!</h2>
        <p>Experience the serenity of Anjanedri Hills and celebrate Lord Hanuman’s birth occasion.</p>
        <img src="/hanuman-highlight.png" alt="Lord Hanuman" style={{ width: '300px', marginTop: '1rem', animation: 'float 3s ease-in-out infinite' }} />
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes cloudMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }
      `}</style>
    </main>
  );
}
