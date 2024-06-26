import '../styles/cards.css'
import FileZipIcon from '../icons/filezipicon'
import facturas from '../db/facturas.json'
import CheckIcon from '../icons/checkicon'

const CardFactura: React.FC = () => {
  return (
    <div className=' bg-[#252526] w-1/6 h-full overflow-hidden flex flex-col'>
      <section className='text-xs px-4 pt-2 h-12 text-white items-center flex font-bold'>
        EMITIR NOTA DE CREDITO
      </section>
      <article className='px-4 mr-0 p-0 flex  h-12 '>
        {/*
            <button className='grid items-center justify-center'>
                <MenorIcon className='w-4'/>
            </button>
          */}
        <article className=' w-full h-full flex flex-col gap-1 justify-center items-center'>
          <form className='flex w-full h-7 '>
            <input type='search' placeholder='Buscar comprobante...' className=' text-sm px-2 rounded bg-[#333333] inputs focus:outline-none focus:ring-[#007acc] focus:ring-1' />
          </form>
          {/*
              <form action="" className='flex w-full h-[22px]  '>
                <input type="text" placeholder="Buscar..." className=' text-sm w-full pl-4 rounded'/>
              </form>
              */}
        </article>
      </article>
      <div className=' flex flex-col px-4'>
        {facturas.map((f, i) => (
          <section
            className='flex w-full items-center h-16 rounded hover:shadow  hover:bg-white/40 hover:text-white justify-between pr-2 group cursor-pointer'
            key={i}
          >
            <article className=' flex justify-start '>

              <FileZipIcon className='w-12 ' />
              <article className=' flex flex-col'>
                <span className='flex-1 whitespace-nowrap text-xs text-amber-200/75 font-extrabold'>
                  {f.numero}
                </span>
                <span className=' text-xs'>
                  {`RUC: ${f.RUC}`}
                </span>
                <span className='  flex text-xs'>
                  <CheckIcon className='w-3 text-[#4caf50]' />
                  {`\u00A0 ${f.fecha}`}
                </span>
              </article>
            </article>
            <span className='inline-flex items-center  py-0.5 ms-3 text-xs font-medium rounded bg-gray-700 max-w-[90px] px-2 w-full justify-between overflow-hidden'>
              <span>
                s/
              </span>
              <span>
                4550400.00
              </span>
            </span>
          </section>
        ))}
      </div>
    </div>
  )
}

export default CardFactura
