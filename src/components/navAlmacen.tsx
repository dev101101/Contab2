import { navAlmacen } from '../lib/maps'
import { NavAlmacenProps } from '../types/types'

const NavAlmacen: React.FC<NavAlmacenProps> = (props: NavAlmacenProps) => {
  const { onSect, accountOn, setMainWindows, crearWindow, mainWindows } = props
  function OnFunct (): void {
    onSect()
  }
  function crearWin (i: number, e: number): void {
    const newWindow = crearWindow(i, e)
    const cerrarWindows = mainWindows.map((m) => {
      if (m.isopen) {
        return {
          ...m,
          isopen: false
        }
      } else {
        return m
      }
    })
    const newMain = [...cerrarWindows, newWindow]
    setMainWindows(newMain)
    console.log(mainWindows)
  }
  return (
    <section className=' w-80 absolute top-8 left-[87px] border border-[#788284] bg-[#1f1f1f] rounded-md z-10'>
      <nav className='p-2 w-full'>
        {navAlmacen.map((b, index) => (
          <button
            className=' select-none text-xs  hover:bg-[#007acc50] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md justify-start'
            onClick={() => {
              OnFunct()
              accountOn(1, index)
              crearWin(1, index)
            }}
            key={index}
          >
            {b}
          </button>
        ))}

      </nav>
    </section>
  )
}

export default NavAlmacen
