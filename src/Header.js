import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto flex h-14 max-w-screen-xl items-center px-2">
                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <div className="flex flex-row">
                            <a href="https://furrl.in/wishlist" className="flex items-center justify-center w-10 h-14">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128">
                                    <path d="M23.67,114.59c1.74,0.78,3.57,1.17,5.37,1.17c3.1,0,6.14-1.13,8.59-3.31l21.71-19.3c2.65-2.36,6.65-2.36,9.3,0l21.71,19.3c3.88,3.45,9.23,4.27,13.96,2.14c4.73-2.13,7.67-6.67,7.67-11.86V24c0-7.17-5.83-13-13-13H29c-7.17,0-13,5.83-13,13v78.73C16,107.92,18.94,112.47,23.67,114.59z M22,24c0-3.86,3.14-7,7-7h70c3.86,0,7,3.14,7,7v78.73c0,2.84-1.54,5.22-4.13,6.39c-2.59,1.16-5.4,0.73-7.52-1.15l-21.71-19.3c-2.46-2.19-5.55-3.28-8.64-3.28s-6.17,1.09-8.64,3.28l-21.71,19.3c-2.12,1.88-4.93,2.32-7.52,1.15c-2.59-1.16-4.13-3.55-4.13-6.39V24z"></path>
                                </svg>
                            </a>
                            <a href="https://furrl.in/cart" className="flex items-center justify-center w-10 h-14">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z" stroke="#1C274C" strokeWidth="1.5"></path>
                                        <circle cx="15" cy="9" r="1" fill="#1C274C"></circle>
                                        <circle cx="9" cy="9" r="1" fill="#1C274C"></circle>
                                        <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className='w-full h-72'>
                <img src="https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg" alt="Home Hunts Vibe Card" />
            </div>
        </div>
    );
}

export default Header;
