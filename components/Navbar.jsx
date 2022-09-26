import Link from 'next/link'
import arrowDown from '../assets/arrow-down.png'
const Navbar = () => {
  const isAuth = true
  const [dropdown, setDropdown] = useState({
    help: false,
    shop: false,
  })
  const toggleDropDown = name => {
    setDropdown(prev => ({ ...prev, name: !dropdown[name] }))
  }
  return (
    <div className='navbar'>
      {isAuth ? (
        <>
          <div className='navbar_left'>
            <Link href='/'>Культура Аналитики</Link>
            <Link href='/mp/selfbuy'>Самовыкупы</Link>
            <div className='item-dropdown'>
              Магазины <img src={arrowDown} alt='dropdown' />
            </div>
            <div
              className={
                dropdown.shop ? 'navbar_dropdown' : 'navbar_dropdown hidden'
              }
              onClick={toggleDropDown('shop')}
            >
              <Link href='/mp/selfbuy'>Магазины</Link>
              <Link href='/mp/selfbuy'>API-ключи</Link>
            </div>
            <div className='item-dropdown'>
              Помощь <img src={arrowDown} alt='dropdown' />
            </div>
            <div
              className={
                dropdown.help ? 'navbar_dropdown' : 'navbar_dropdown hidden'
              }
              onClick={toggleDropDown('help')}
            >
              <Link href='/mp/selfbuy'>Магазины</Link>
              <Link href='/mp/selfbuy'>API-ключи</Link>
            </div>
          </div>
          <div className='navbar_right'>
            <Link href='/mp/selfbuy'>User Name</Link>
            <Link href='/mp/selfbuy'>Выход</Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Navbar
