import React from 'react'
import PernikahanCard from './PernikahanCard'

const PernikahanPage = () => {
  return (
    <div>
      <PernikahanCard category='Katekisasi' jadwal='29 Mei 16:00'>{/*Informasi pendaftaran disini*/}Isi informasi pendaftaran</PernikahanCard>
      <PernikahanCard category='Konseling' jadwal='29 Mei 16:00'>{/*Informasi pendaftaran disini*/}Isi informasi pendaftaran</PernikahanCard>
      <PernikahanCard category='Pemberkatan' jadwal='29 Mei 16:00'></PernikahanCard>
    </div>
  )
}

export default PernikahanPage
