import Link from 'next/link';
import React from 'react';
import cardList from '../data';

export default function Carousel({ product}) {
  return (
    <div className="card">
        <img
          src={card.img}
          alt={card.title}
          className="rounded shadow object-cover h-64 w-full"
        />

      <div className="flex flex-col items-center justify-center p-5">

          <h2 className="text-lg">{card.title}</h2>
      </div>
    </div>
  );
}