'use client'

import { useState } from 'react'; // Importe useState
import Image from 'next/image'
import CardCofee from '@/components/card';

const data = [
  { id: 0, price: '12,99', src: '/images/image-1.png', title: 'Café expresso', descrição: 'Uma dose concentrada de café preparada rapidamente, resultando em um sabor forte e encorpado.' },
  { id: 1, price: '12,99', src: '/images/image-2.png', title: 'Café Latte', descrição: 'Uma bebida à base de café que consiste em café expresso e leite vaporizado, geralmente coberto com uma pequena quantidade de espuma de leite.' },
  { id: 2, price: '12,99', src: '/images/image-3.png', title: 'Cappuccino', descrição: 'Uma bebida italiana que combina café expresso, leite vaporizado e espuma de leite, resultando em uma textura suave e um sabor equilibrado.' },
  { id: 3, price: '12,99', src: '/images/image-4.png', title: 'Mocha', descrição: 'Uma combinação deliciosa de café expresso, leite vaporizado, chocolate e, muitas vezes, chantilly, criando uma bebida doce e saborosa.' },
  { id: 4, price: '12,99', src: '/images/image-5.png', title: 'Macchiato', descrição: 'Um café expresso "manchado" com uma pequena quantidade de leite vaporizado, criando uma experiência de sabor contrastante.' },
  { id: 5, price: '12,99', src: '/images/image-1.png', title: 'Ristretto', descrição: 'Uma versão ainda mais concentrada do café expresso, preparada com menos água, resultando em um sabor mais intenso.' },
  { id: 6, price: '12,99', src: '/images/image-2.png', title: 'Café Americano', descrição: 'Uma bebida suave feita diluindo o café expresso com uma quantidade maior de água, resultando em um sabor mais fraco.' },
  { id: 7, price: '12,99', src: '/images/image-3.png', title: 'Café Turco', descrição: 'Uma tradição milenar de preparar café usando pó de café muito fino e água, muitas vezes com especiarias, criando uma bebida forte e aromática.' },
  { id: 8, price: '12,99', src: '/images/image-4.png', title: 'Café Gelado', descrição: 'Uma variação refrescante do café, normalmente servida com gelo e adoçantes, como açúcar ou xaropes.' },
  { id: 9, price: '12,99', src: '/images/image-5.png', title: 'Café Descafeinado', descrição: 'Uma versão de café que passou por um processo de remoção da maior parte da cafeína, permitindo que as pessoas desfrutem do sabor do café sem a estimulação da cafeína.' }
];

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const [showCard, setShowCard] = useState(false)
  return (
    <>
    <main className='flex flex-col items-center justify-start w-screen min-h-screen bg-white relative'>
      <header className='w-full flex items-center justify-center bg-main h-24'>
        <h2 className='text-2xl'>Catálogo de Café</h2>
      </header>

      <input
        type="search"
        placeholder='Busque por um café'
        className='rounded-lg px-2 py-3 border border-main text-main mt-12'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <div className="flex flex-row gap-12 items-start justify-center flex-wrap mt-12">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <CardCofee item={item} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-12 text-main">
<Image src={'/icons/cofee.svg'} width={250} height={250} alt='Pessoas com xicaras de café' />
          <p className='text-lg'>Opps... Nenhum café encontrado</p>
          <p>Experimente buscar por outro café!</p>
          </div>
        )}
      </div>
    </main>


    </>
  );
}

