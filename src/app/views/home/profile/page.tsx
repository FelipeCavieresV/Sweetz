'use client'


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white text-white">
      {/* PORTADA */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] bg-[#E8E3E7]">
        <button className="absolute top-[25px] left-2 sm:left-4 bg-[#8e24aa] bg-opacity-80 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 shadow hover:bg-opacity-90 transition cursor-pointer">
          <span>📷</span> Cambiar portada
        </button>

      </div>

      {/* AVATAR + NOMBRE + BOTÓN */}
      <div className="flex flex-col items-center mt-[-60px] bg-white text-gray-800 py-6 shadow-inner rounded-b-lg">
        <div className="relative w-40 h-40 rounded-full border-4 border-white bg-gray-300 shadow-lg overflow-hidden">
          <img
            src="/images/default-avatar.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 w-full h-[60px] bg-white bg-opacity-40 text-center flex items-center justify-center text-sm text-gray-700 cursor-pointer transition hover:bg-opacity-60"
          >
            📷
          </div>

        </div>


        <h2 className="mt-4 text-xl font-bold">Mario Gonzales López</h2>

        <button className="mt-2 bg-[#8e24aa] text-white px-4 py-2 text-sm rounded-full flex items-center gap-2 hover:bg-[#9c27b0] transition cursor-pointer">
          ✏️ Editar perfil
        </button>
      </div>

    </div>
  )
}