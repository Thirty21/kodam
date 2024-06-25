"use client";


import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React from "react";
import Link from "next/link";
import { useState } from 'react';

export function Card() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [codam, setCodam] = useState('');

  const codams = ['Kunti Bogel', 'Tuyul Mullet', 'Nyi Blorong', 'Macan Bogel', 'Tidak Ada', 'Sperpat', 'Tidak Ada', 'Kijang Mullet', 'Kadal Pargoy', 'Babi Brondong','Ayam Penyet','Rusa Bungkuk'];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const randomCodam = codams[Math.floor(Math.random() * codams.length)];
    setCodam(randomCodam);
    setSubmittedName(name);
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-transparent hover:shadow-50 border border-purple-500 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white-600 dark:text-white"
        >
          Cek Codam
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Mari cek Codam kamu sekarang di sini dengan mudah dan cepat !!!
        </CardItem>
        <form onSubmit={handleSubmit}>
          <CardItem translateZ="100" className="w-full mt-4">
            <input
              type="text"
              // id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full bg-transparent rounded-2xl pl-3 py-1.5 text-white dark:text-white text-base border border-purple-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 placeholder-white"
              placeholder="Enter your name"
            />
            <div className="mt-2 md:ml-10">
            {codam && submittedName && (
          <p className="mt-4 text-white text-lg">
            {submittedName}, Kodam Kamu {codam}!
          </p>
            )}
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://www.instagram.com/ahdiikhf_/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Instagram →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              type="submit"
              className="px-4 py-2 rounded-xl bg-purple-500 dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Cek Codam
            </CardItem>
          </div>
        </form>
      
      </CardBody>
    </CardContainer>
  );
}
