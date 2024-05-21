import { useState } from 'react';
import SharePopup from './share';

const Card = ({ product }) => {

    const productUrl = `https://furrl.in/productDetail?id=${product.id}&ref=vibeResults_HomeHunts`;
    const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

    const handleShareClick = () => {
        setIsSharePopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsSharePopupOpen(false);
    };

    return (
        <div>

            <div class="relative">
                <img
                    src={product.images[0].src}
                    alt={product.title}
                    className="aspect-square w-full object-cover"
                />
                <button class="share-button absolute m-2 bottom-0 right-0 z-10 bg-gray-700 text-white h-7 w-8 p-1 rounded-full flex items-center justify-center" onClick={handleShareClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20" id="share"><path stroke="#FFF" fill="#FFF" d="M20 15.5V12c0-.6-.4-1-1-1s-1 .4-1 1v3.5c0 1.4-1.1 2.5-2.5 2.5h-7C7.1 18 6 16.9 6 15.5v-7C6 7.1 7.1 6 8.5 6H12c.6 0 1-.4 1-1s-.4-1-1-1H8.5C6 4 4 6 4 8.5v7C4 18 6 20 8.5 20h7c2.5 0 4.5-2 4.5-4.5z"></path><path stroke="#FFF" fill="#FFF" d="M21 9V4c0-.1 0-.3-.1-.4-.1-.2-.3-.4-.5-.5-.1-.1-.3-.1-.4-.1h-4.8c-.6 0-1 .4-1 1s.4 1 1 1h2.4l-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3L19 6.4V9c0 .6.4 1 1 1s1-.4 1-1z"></path></svg>
                </button>
            </div>


            {isSharePopupOpen && (
                <SharePopup productUrl={productUrl} onClose={handleClosePopup} />
            )}
            <a href={productUrl} className="group block">
                <div className="mt-1 mx-2">
                    <h3 className="font-small uppercase text-xs text-gray-500 group-hover:underline group-hover:underline-offset-4 overflow-hidden truncate">
                        {product.vendor}
                    </h3>
                    <h3 className="font-small text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 overflow-hidden truncate">
                        {product.title}
                    </h3>
                    <div className='flex'>
                        <p className="font-medium text-xs text-gray-900">
                            Rs. {product.price.value}
                        </p>
                        <p className="font-small mx-1 text-xs text-gray-500 line-through">
                            Rs.{product.MRP.value}
                        </p>
                        <p className="font-small mx-1 text-xs text-indigo-700">
                            {product.discountPercent}%
                        </p>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default Card;
