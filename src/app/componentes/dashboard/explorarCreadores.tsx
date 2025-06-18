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

      <div className="text-center text-secondary mt-4" style={{ fontSize: '0.75rem' }}>
        <p className="mb-2">© 2025 Sweetz</p>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {[
            'Términos de uso',
            'Política de Privacidad',
            'Política de Cookies',
            'Preguntas de Creador',
            'Preguntas de Usuario',
            'Reembolsos',
            'Contáctenos',
            'Blog',
            '🌐 Español',
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="text-secondary text-decoration-none"
              style={{ transition: 'color 0.2s ease-in-out', fontSize: '0.75rem' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#8e24aa')}
              onMouseOut={(e) => (e.currentTarget.style.color = '')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}
