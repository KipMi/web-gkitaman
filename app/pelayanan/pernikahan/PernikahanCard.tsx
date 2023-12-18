import React from 'react'

type PernikahanCardProps = {
    category: string
    children?: React.ReactNode
    jadwal: string
}

const PernikahanCard: React.FC<PernikahanCardProps> = (props) => {
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
              <p>Jadwal:</p>
              <p>
                {props.jadwal}
              </p>
            </div>
          </div>
    </div>
  )
}

export default PernikahanCard
