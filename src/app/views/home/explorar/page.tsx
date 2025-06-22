'use client'

import { useState } from 'react'
import { Search, Star, Users, Lock, Wifi } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css'

const creators = [
  {
    id: 1,
    name: 'Carlaroseblack',
    description: 'Ve todo mi contenido porno nuevo 😍 SOLO PAGANDO LA SUSCRIPCIÓN',
    price: 5,
    avatar: '/avatar1.jpg',
    background: '/background1.jpg',
  },
  {
    id: 2,
    name: 'Mia Brown',
    description: 'CONTENIDO FULL PORNO 😈😈😈 Tendrás r...',
    price: 8,
    avatar: '/avatar2.jpg',
    background: '/background2.jpg',
  },
  {
    id: 3,
    name: 'Dani_police',
    description: '*CREADORA GOLD* ✨',
    price: 5,
    avatar: '/avatar3.jpg',
    background: '/background3.jpg',
  },
  {
    id: 4,
    name: 'Trinilausen',
    description: '¡Entra en mi universo paralelo! ❤️ ¡Rubia, ojos az...',
    price: 5,
    avatar: '/avatar4.jpg',
    background: '/background4.jpg',
  },
  // Puedes duplicar estos objetos para probar el paginado
]

export default function ExplorarPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('destacados')
  const [page, setPage] = useState(1)
  const perPage = 12

  const filtered = creators.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-4">Creadores destacad@s</h2>
      <p className="text-center text-muted mb-5">Conoce a más de nuestras creadoras</p>

      <div className="row justify-content-center">
        {/* Filtros laterales */}
        <div className="col-md-3 mb-4">
          <div className="bg-white shadow-sm rounded p-3 sticky-top">
            <h6 className="fw-bold mb-3">Filtrar por</h6>
            {[
              { key: 'destacados', icon: <Star size={16} />, label: 'Creadores destacad@s' },
              { key: 'nuevos', icon: <Users size={16} />, label: 'Nuevos creadores' },
              { key: 'gratis', icon: <Lock size={16} />, label: 'Suscripción Gratuita' },
              { key: 'vivo', icon: <Wifi size={16} />, label: 'Vivo' },
            ].map(btn => (
              <button
                key={btn.key}
                className={`btn w-100 mb-2 ${filter === btn.key ? 'text-white' : 'btn-light'}`}
                style={{ backgroundColor: filter === btn.key ? '#8e24aa' : '' }}
                onClick={() => setFilter(btn.key)}
              >
                {btn.icon} <span className="ms-2">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Resultados */}
        <div className="col-md-9">
          {/* Barra de búsqueda */}
          <div className="input-group mb-4">
            <span className="input-group-text bg-light"><Search size={18} /></span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre o @usuario"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setPage(1)
              }}
            />
          </div>

          {/* Grid de creadores */}
          <div className="row justify-content-center">
            {paginated.map(c => (
              <div className="col-sm-6 col-lg-4 mb-4 d-flex justify-content-center" key={c.id}>
                <div className="card shadow-sm h-100" style={{ width: '100%', maxWidth: '300px' }}>
                  <div style={{
                    height: 160,
                    backgroundImage: `url(${c.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: '0.375rem',
                    borderTopRightRadius: '0.375rem'
                  }} />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <img src={c.avatar} className="rounded-circle me-2 border" style={{ width: 50, height: 50, objectFit: 'cover' }} alt={c.name} />
                      <div>
                        <h6 className="mb-0 fw-bold">{c.name}</h6>
                        <small className="text-muted">{c.description}</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-outline-primary btn-sm">Ir a la página</button>
                      <span className="badge rounded-pill bg-info text-dark">${c.price.toFixed(2)}/mes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sin resultados */}
          {filtered.length === 0 && (
            <p className="text-muted text-center">No se encontraron resultados.</p>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <nav>
                <ul className="pagination">
                  <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => setPage(p => Math.max(1, p - 1))}>«</button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
                    </li>
                  ))}
                  <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => setPage(p => Math.min(totalPages, p + 1))}>»</button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
