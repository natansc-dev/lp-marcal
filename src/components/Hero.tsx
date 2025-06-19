import React from 'react'

export default function Hero() {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden text-white bg-[url(../assets/bg-hero.webp)] bg-cover bg-center bg-no-repeat"
  
    >
      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col md:flex-row items-center w-full max-w-6xl px-4 py-16 gap-8">
        {/* Texto e formulário */}
        <div className="flex-1 max-w-md space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            A MAIOR <br /> TRANSFERÊNCIA DE <br className="hidden md:block" /> RIQUEZA DA HISTÓRIA <br /> VAI COMEÇAR...
          </h1>
          <p className="text-sm md:text-base text-gray-200">Você vai aproveitar essa oportunidade ou vai assistir?</p>
          <form className="space-y-3">
            <input type="text" placeholder="SEU NOME" className="w-full rounded bg-white/10 border border-white/20 px-4 py-2 placeholder:text-gray-300 focus:outline-none" />
            <input type="email" placeholder="SEU MELHOR E-MAIL" className="w-full rounded bg-white/10 border border-white/20 px-4 py-2 placeholder:text-gray-300 focus:outline-none" />
            <input type="text" placeholder="DDD + WHATSAPP" className="w-full rounded bg-white/10 border border-white/20 px-4 py-2 placeholder:text-gray-300 focus:outline-none" />
            <button type="button" className="w-full bg-[#ff7a1a] hover:bg-[#ff8c3a] text-white font-bold py-2 rounded transition">QUERO ME INSCREVER GRATUITAMENTE</button>
          </form>
        </div>
        {/* Imagem dos palestrantes */}
        <div className="flex-1 flex flex-col items-center">
          {/* Imagem fictícia, substitua pelo src real depois */}
          <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px] overflow-hidden shadow-lg">
            {/* Placeholder para imagem dos palestrantes */}
            <div className="absolute bottom-8 left-0 w-full text-center">
              <span className="block text-lg font-semibold tracking-widest text-[#ff7a1a]">A ASCENSÃO DOS</span>
              <span className="block text-4xl font-extrabold text-[#ff7a1a]">IMPROVÁVEIS</span>
              <span className="block text-xs text-white mt-1">LEANDRO AGUIAR + PABLO MARÇAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 