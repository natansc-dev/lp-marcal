import React from 'react'
import featureImg from '../assets/LEANDRO-E-PABLO-MARCAL.webp'
import Image from 'next/image'

export default function Features() {
  return (
    <section className="bg-[#f3f3f3] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-6 text-gray-800">A UNIÃO DOS DOIS MAIORES PLAYERS<br className="hidden md:block" /> DO DIGITAL POR UMA CAUSA!</h2>
        <p className="text-center text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Dois homens com histórias diferentes. Mas com a mesma raiz: vieram de baixo. E não aceitaram morrer no lugar onde nasceram.</p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Imagem fictícia, substitua pelo src real depois */}
          <div className="flex-1 flex justify-center">
            <Image src={featureImg} alt="Palestrantes no palco" className="rounded-lg shadow-md w-full object-cover" />
          </div>
          <div className="flex-1 space-y-4 text-gray-800 text-sm md:text-base">
            <p><b>Pablo Marçal</b>, <span className="underline text-[#ff7a1a]">ex-call center</span>, construiu um <b>ecossistema bilionário</b>.</p>
            <p><b>Leandro Aguiar</b>, da quebrada de Itaquera pro topo do digital, criou narrativas que movimentaram mais de <b>R$400 milhões</b>. <span className="underline text-[#ff7a1a]">Número um do storytelling no Brasil.</span></p>
            <p>Dois gigantes. <b>Uma causa maior.</b> Eles se uniram não por ego, mas por uma geração: a dos <b>improváveis</b>.</p>
            <p>Aqueles que foram ignorados. Desacreditados. Sem herança, mas com fome.</p>
            <p>Agora, estão convocando os próximos para <span className="underline text-[#ff7a1a]">transformar a maior crise em a maior transferência de riqueza da história</span>.</p>
            <p>Se você sente que nasceu pra mais – mas ainda não viu o jogo... Você é exatamente quem eles vieram buscar.</p>
            <p className="font-bold text-[#ff7a1a]">Não somos poucos. Só estávamos separados.</p>
            <div className="mt-4">
              <button className="bg-[#ff7a1a] hover:bg-[#ff8c3a] text-white font-bold py-2 px-6 rounded transition">QUERO ME INSCREVER GRATUITAMENTE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 