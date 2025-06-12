'use client'

export default function Publicaciones() {
  return (
    <div className="w-full md:w-3/3 bg-gray-100 p-4 rounded-lg text-center shadow">
      <h5 className="text-left text-gray-700 text-base font-semibold mb-3">Publicaciones</h5>

      {[1, 2, 3].map((post) => (
        <div
          key={post}
          className="bg-white rounded-xl shadow-sm mb-4 border border-gray-300 overflow-hidden text-left"
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-3">
            <img
              src="/images/daniela.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-sm text-[#ba2adf]">
                AlliLuffi <span className="text-gray-500">@Alliluffi</span>
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                hace 2 días <span>🔒</span>
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <div className="px-3 pb-2 text-sm text-gray-700">
            <span>Buen día lindos 😘</span>
          </div>

          {/* Imagen bloqueada */}
          <div className="bg-gray-200 h-[420px] flex flex-col items-center justify-center relative">
            <svg
              className="w-10 h-10 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 11h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
              />
            </svg>

            <button className="cursor-pointer bg-[#9c27b0] text-white px-6 py-2 text-sm border border-[#ba2adf] rounded-xl hover:bg-[ #ba2adf] transition">
              Debes suscribirte para ver esta publicación
            </button>

            <span className="mt-2 text-xs text-gray-600">🎥 3</span>
          </div>

          {/* Reacciones */}
          <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span>❤️ 6</span>
              <span>💬 1</span>
              <span>🔄</span>
            </div>
            <span>🔖</span>
          </div>
        </div>
      ))}
    </div>
  )
}
