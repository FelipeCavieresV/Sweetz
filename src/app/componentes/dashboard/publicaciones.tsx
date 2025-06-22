'use client'

  const contenidoBloqueado = false // ← cambia a `true` para bloquear
export default function Publicaciones() {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="card border-1 rounded-4 shadow-sm overflow-hidden mb-4"
        >
          {/* Encabezado */}
          <div className="card-body pb-2">
            <div className="d-flex align-items-start justify-content-between">
              {/* Izquierda: Avatar + datos */}
              <div className="d-flex align-items-start gap-3 flex-grow-1">
                <img
                  src="/images/daniela.png"
                  alt="Avatar"
                  className="rounded-circle"
                  style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                />

                <div style={{ minWidth: 0 }}>
                  {/* Nombre + verificación + handle */}
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    <span
                      className="fw-bold"
                      style={{
                        color: '#00aaff',
                      }}
                    >
                      Cottafer 💋
                    </span>
                    <i
                      className="bi bi-patch-check-fill"
                      style={{ color: '#1da1f2' }}
                      title="Cuenta verificada"
                    ></i>
                    <span className="text-muted small">@cottAfer</span>
                  </div>

                  {/* Tiempo + ícono */}
                  <div className="text-muted small d-flex align-items-center gap-1">
                    hace 8 días <i className="bi bi-lock-fill ms-1"></i>
                  </div>
                </div>
              </div>

              {/* Botón de tres puntos */}
              <div className="dropdown">
                <button
                  className="btn btn-link text-muted p-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Copiar enlace</a></li>
                  <li><a className="dropdown-item" href="#">Reportar</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-2 text-secondary small fw-medium text-break">
              assddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd 🙈
            </div>
          </div>

          <>
            {contenidoBloqueado ? (
              // 🔒 Contenido bloqueado
              <div
                className="position-relative d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                  background: 'linear-gradient(135deg, rgb(161, 7, 97), rgb(32, 4, 29))',
                  minHeight: '420px',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    backgroundImage: `url('/images/blur.jpg')`, // si tienes esta imagen
                    backgroundSize: 'cover',
                    filter: 'blur(10px)',
                    zIndex: 1,
                  }}
                />
                <div className="position-relative z-2 d-flex flex-column align-items-center">
                  <i
                    className="bi bi-lock-fill"
                    style={{ fontSize: '2.5rem', color: 'white' }}
                  ></i>

                  <button
                    className="btn rounded-pill mt-3 px-4 py-2 fw-semibold text-white"
                    style={{ backgroundColor: '#22cbd0' }}
                  >
                    Debes suscribirte para ver esta publicación
                  </button>

                  <div className="text-white mt-2 small d-flex align-items-center gap-1">
                    <i className="bi bi-images"></i> 4
                  </div>
                </div>
              </div>
            ) : (
              // 🔓 Contenido desbloqueado: muestra imagen normal
              <div
                className="position-relative w-100"
                style={{
                  backgroundColor: '#000',
                }}
              >
                <img
                  src="/images/mujerresolucion.jpg"
                  alt="Contenido desbloqueado"
                  className="img-fluid w-100"
                  style={{
                    objectFit: 'cover',
                    maxHeight: '600px',
                  }}
                />
              </div>
            )}
          </>

          {/* Footer */}
          <div className="card-footer bg-white d-flex justify-content-between align-items-center px-3 py-2">
            <div className="d-flex align-items-center gap-4 text-muted small">
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-heart"></i>
                <span className="fw-semibold">23</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-chat"></i>
                <span className="fw-semibold">2</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-share"></i>
              </div>
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-coin"></i>
                <span className="fw-semibold">Propina</span>
              </div>
            </div>

            <i className="bi bi-bookmark text-muted"></i>
          </div>
        </div>
      ))}
    </>
  )
}
