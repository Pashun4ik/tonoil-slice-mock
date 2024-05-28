import { Link } from "react-router-dom";

export function MenuWidget() {
    return <div className="btm-nav flex mx-auto h-28" style={{maxWidth: '580px'}}>
        <Link to='/' className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/main.png' />
            <span className="btm-nav-label">Main</span>
        </Link>
        <Link to='/craft' className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/craft.png' />
            <span className="btm-nav-label">Craft</span>
        </Link>
        <Link to='#' className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/trade.png' />
            <span className="btm-nav-label">Trade</span>
        </Link>
        <Link to='#' className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/referal.png' />
            <span className="btm-nav-label">Referal</span>
        </Link>
    </div>
}