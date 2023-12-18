import React, { ReactNode } from 'react'

type BaptisCardProps = {
    category: string
    children?: ReactNode
    jadwal: string
    jadwalKatekisasi?: string
}

const BaptisCard: React.FC<BaptisCardProps> = (props) => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
          <div className="card w-3/4 shadow-xl mt-5" >
            <div className="card-body">
              <h1 className="card-title">
                {props.category}
              </h1>
              {props.children ? (
                <div>
                    <h1>Informasi Pendaftaran</h1>
                    <p>{props.children}</p>
                </div>
              ) : ''}
              {props.jadwalKatekisasi ? (
                <div>

              <p>Jadwal Katekisasi:</p>
              <p>
                {props.jadwalKatekisasi}
              </p>
                </div>
              ): ''}
              <p>Jadwal:</p>
              <p>
                {props.jadwal}
              </p>
            </div>
          </div>
    </div>
  )
}

export default BaptisCard
