export function MenuWidget() {
    return <div className="btm-nav flex mx-auto h-28" style={{maxWidth: '580px'}}>
        <button className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/main.png' />
            <span className="btm-nav-label">Main</span>
        </button>
        <button className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/craft.png' />
            <span className="btm-nav-label">Craft</span>
        </button>
        <button className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/trade.png' />
            <span className="btm-nav-label">Trade</span>
        </button>
        <button className="border-1 bg-amber-900">
            <img className='w-14 h-14 object-contain' src='/images/menu/referal.png' />
            <span className="btm-nav-label">Referal</span>
        </button>
    </div>
}