'use client';

import { useState } from 'react';
import FooterPerfil from '../../../../componentes/perfil/footerPerfil';

const usuariosDisponibles = [
  { id: 1, nombre: 'Cottafer 💋', avatar: '/images/avatar1.jpg', verificado: true, mensaje: 'Exquisita me encanta tu contenido esperaba hace un tiempo una fotito ...', fecha: 'hace 3 días' },
  { id: 2, nombre: 'Juan P.', avatar: '/images/avatar2.jpg', verificado: false, mensaje: '¿Cuándo subes nuevo contenido?', fecha: 'hace 1 semana' },
];

const mensajesMock = {
  1: [
    { id: 1, texto: 'Hola, ¿cómo estás?', emisor: 'creador', fecha: '2025-06-17 15:30' },
    { id: 2, texto: '¡Hola! Todo bien, gracias 😊', emisor: 'usuario', fecha: '2025-06-17 15:32' },
  ],
  2: [
    { id: 3, texto: '¿Cuándo subes nuevo contenido?', emisor: 'creador', fecha: '2025-06-15 12:00' },
  ]
};

export default function MensajesPage() {
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState<number | null>(null);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mensajes, setMensajes] = useState(mensajesMock);

  const usuarioSeleccionado = usuariosDisponibles.find((u) => u.id === usuarioSeleccionadoId);
  const mensajesActuales = usuarioSeleccionadoId ? mensajes[usuarioSeleccionadoId] || [] : [];

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim() || !usuarioSeleccionadoId) return;

    const nuevo = {
      id: Date.now(),
      texto: nuevoMensaje.trim(),
      emisor: 'usuario',
      fecha: new Date().toLocaleString(),
    };

    setMensajes((prev) => ({
      ...prev,
      [usuarioSeleccionadoId]: [...(prev[usuarioSeleccionadoId] || []), nuevo],
    }));

    setNuevoMensaje('');
  };

  return (
    <>
      <main className="min-vh-100 bg-light text-dark py-4 px-3">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h5 fw-bold mb-0">💬 Mensajes</h2>
            <button className="btn btn-sm btn-outline-primary">
              <i className="bi bi-pencil" /> Nuevo mensaje
            </button>
          </div>

          <div className="row gx-4">
            {/* Columna izquierda: lista de chats */}
            <div className="col-lg-4 col-xl-3 mb-4">
                <div className="list-group rounded shadow-sm">
                    {usuariosDisponibles.map((chat) => {
                    const isActive = usuarioSeleccionadoId === chat.id;
                    return (
                        <div
                        key={chat.id}
                        onClick={() => setUsuarioSeleccionadoId(chat.id)}
                        className="list-group-item list-group-item-action d-flex gap-3 align-items-start"
                        style={{
                            cursor: 'pointer',
                            backgroundColor: isActive ? '#8e24aa' : '',
                            color: isActive ? 'white' : '',
                        }}
                        >
                        <img
                            src={chat.avatar}
                            alt={chat.nombre}
                            className="rounded-circle mt-1"
                            style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                        />
                        <div className="flex-grow-1 overflow-hidden">
                            <div
                            className="fw-semibold d-flex align-items-center gap-2"
                            style={{ color: isActive ? 'white' : '' }}
                            >
                            {chat.nombre}
                            {chat.verificado && (
                                <i
                                className="bi bi-patch-check-fill"
                                style={{ color: isActive ? 'white' : '#0d6efd' }}
                                ></i>
                            )}
                            </div>
                            <div
                            className="small"
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                color: isActive ? 'white' : '#6c757d',
                            }}
                            >
                            {chat.mensaje}
                            </div>
                        </div>
                        <div
                            className="small ms-auto text-nowrap"
                            style={{ color: isActive ? 'white' : '#6c757d' }}
                        >
                            {chat.fecha}
                        </div>
                        </div>
                    );
                    })}
                </div>
                </div>


            {/* Columna derecha: conversación */}
            <div className="col-lg-8 col-xl-9">
              {usuarioSeleccionado ? (
                <>
                  <h5 className="fw-bold mb-3">Conversación con {usuarioSeleccionado.nombre}</h5>
                  <div className="border rounded-4 shadow-sm bg-white p-3 mb-3" style={{ height: '60vh', overflowY: 'auto' }}>
                    {mensajesActuales.map((msg) => (
                      <div
                        key={msg.id}
                        className={`mb-3 d-flex ${msg.emisor === 'usuario' ? 'justify-content-end' : 'justify-content-start'}`}
                      >
                        <div
                          className={`p-2 px-3 rounded-3 text-white small ${
                            msg.emisor === 'usuario' ? 'bg-primary text-end' : 'bg-secondary'
                          }`}
                          style={{ maxWidth: '70%' }}
                        >
                          <div>{msg.texto}</div>
                          <div className="text-white-50 text-end mt-1" style={{ fontSize: '0.7rem' }}>
                            {msg.fecha}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Mensaje para ${usuarioSeleccionado.nombre}...`}
                      value={nuevoMensaje}
                      onChange={(e) => setNuevoMensaje(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && enviarMensaje()}
                    />
                    <button className="btn btn-primary" onClick={enviarMensaje}>
                      Enviar
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-muted">Selecciona un chat para ver la conversación.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <FooterPerfil />
    </>
  );
}
