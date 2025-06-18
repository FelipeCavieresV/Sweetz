'use client'

type Creator = {
  name: string
  username: string
  stats: [string, string, string, string]
  bg: string
  avatar: string
}

const creators: Creator[] = [
  {
    name: 'Daniela Ruiz',
    username: '@Danielaoficialcl',
    stats: ['326', '796', '188', '2'],
    bg: '/images/bgdaniela.jpeg',
    avatar: '/images/daniela.png'
  },
  {
    name: 'Aliluffi',
    username: '@Aliluffi',
    stats: ['32', '27', '24', '0'],
    bg: '/images/bgdaniela.jpeg',
    avatar: '/images/daniela.png'
  },
  {
    name: 'Dannyy Blonde',
    username: '@Dannyyblonde',
    stats: ['560', '589', '453', '19'],
    bg: '/images/bgdaniela.jpeg',
    avatar: '/images/daniela.png'
  },
  {
    name: 'Nicoblock',
    username: '@Nicoblock',
    stats: ['1.3k', '1.1k', '291', '0'],
    bg: '/images/bgdaniela.jpeg',
    avatar: '/images/daniela.png'
  }
]

export default function ExplorarCreadores() {
  return (
    <div className="mt-2">
      <h5 className="text-start text-dark mb-3">Explorar creadores</h5>

      {creators.map((creator, idx) => (
        <div
          key={idx}
          className="card text-white mb-3 border-0 shadow-sm overflow-hidden"
          style={{
            backgroundImage: `url(${creator.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="card-body" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="rounded-circle border border-white me-3"
                style={{ width: '64px', height: '64px', objectFit: 'cover' }}
              />
              <div>
                <div className="fw-bold">{creator.name}</div>
                <div className="small text-white-50">{creator.username}</div>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2 small">
              <span className="badge bg-secondary">📷 {creator.stats[0]}</span>
              <span className="badge bg-secondary">📹 {creator.stats[1]}</span>
              <span className="badge bg-secondary">📁 {creator.stats[2]}</span>
              <span className="badge bg-secondary">💬 {creator.stats[3]}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="text-muted small mt-4">
        <p className="mb-1">© 2025 Sweetz</p>
        <div className="d-flex flex-wrap gap-2">
          <a href="#" className="text-muted text-decoration-none">Términos de uso</a>
          <a href="#" className="text-muted text-decoration-none">Política de Privacidad</a>
          <a href="#" className="text-muted text-decoration-none">Política de Cookies</a>
          <a href="#" className="text-muted text-decoration-none">Preguntas de Creador</a>
          <a href="#" className="text-muted text-decoration-none">Preguntas de Usuario</a>
          <a href="#" className="text-muted text-decoration-none">Reembolsos</a>
          <a href="#" className="text-muted text-decoration-none">Contáctenos</a>
          <a href="#" className="text-muted text-decoration-none">Blog</a>
          <a href="#" className="text-muted text-decoration-none">🌐 Español</a>
        </div>
      </div>
    </div>
  )
}
