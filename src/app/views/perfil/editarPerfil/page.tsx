'use client';

import { useState } from 'react';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function EditarPerfilPage() {
  const [formData, setFormData] = useState({
    nombreUsuario: 'Mario bros',
    nombreLink: 'arsmate.com/u61414',
    email: '',
    profesion: '',
    idioma: 'Español',
    fechaNacimiento: '1969-12-31',
    genero: 'No especificado',
    empresa: '',
    pais: 'Chile',
    ciudad: '',
    direccion: '',
    postal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del perfil:', formData);
  };

  return (
    <>
      <main className="min-vh-100 bg-light text-dark py-4 px-2">
        <div className="container">
          <div className="row justify-content-center">
            {/* Sidebar */}
            <div className="col-md-3">
              <SidebarPerfil />
            </div>

            {/* Formulario principal */}
<div className="col-md-8 col-lg-7">
  <div className="px-2 px-md-0">
    <h1 className="h5 fw-bold mb-2 text-center text-md-start">✏️ Editar perfil</h1>
    <p className="text-muted small mb-3 text-center text-md-start">Cuéntanos algo sobre ti.</p>

    <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border">
      <form onSubmit={handleSubmit} className="row g-3">

        <div className="col-12">
          <label htmlFor="nombreUsuario" className="form-label">Nombre de Usuario</label>
          <input type="text" className="form-control" id="nombreUsuario" name="nombreUsuario" value={formData.nombreUsuario} onChange={handleChange} />
        </div>

        <div className="col-12">
          <label htmlFor="nombreLink" className="form-label">Nombre de Link</label>
          <input type="text" className="form-control" id="nombreLink" name="nombreLink" value={formData.nombreLink} onChange={handleChange} />
        </div>

        <div className="col-12 small text-muted">
          🔘 Mostrar nombre de tu link en lugar de tu Nombre de usuario
        </div>

        <div className="col-12">
          <input type="email" className="form-control bg-light text-muted" name="email" value={formData.email} onChange={handleChange} placeholder="Correo" disabled />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" name="profesion" value={formData.profesion} onChange={handleChange} placeholder="Profesión / Ocupación" />
        </div>

        <div className="col-md-6">
          <select className="form-select" name="idioma" value={formData.idioma} onChange={handleChange}>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
          </select>
        </div>

        <div className="col-md-6">
          <input type="date" className="form-control" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <select className="form-select" name="genero" value={formData.genero} onChange={handleChange}>
            <option value="No especificado">(Género) No especificado</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="col-12 small text-muted">
          Formatos válidos: <strong>13/06/2007</strong> – (Se puede editar solo una vez)
        </div>

        <hr className="my-3" />
        <h6 className="text-muted">– Información de facturación</h6>

        <div className="col-12">
          <input type="text" className="form-control" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Empresa" />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" name="pais" value={formData.pais} onChange={handleChange} placeholder="País" />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Ciudad" />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control" name="postal" value={formData.postal} onChange={handleChange} placeholder="Código Postal" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success w-100 fw-semibold py-2">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

          </div>
        </div>
      </main>

      <FooterPerfil />
    </>
  );
}