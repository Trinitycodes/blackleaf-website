import { Link } from "react-router-dom";

const Footer = () => {

    return (
  
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 rounded-full" viewBox="0 0 55 55">
                        <image src="https://dummyimage.com/420x260" width="55" height="55" />
                    </svg>
                    <span className="ml-3 text-lg font-Stalin">Cattle Kings</span>
                </a>
                <p className="mt-2 text-sm text-gray-500">Build a Ranching Empire in this Play to Earn Metaverse!!!!</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Links</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <Link className="text-gray-400 hover:text-white" to="/whitepaper">Whitepaper</Link>
                    </li>
                    <li>
                        <Link className="text-gray-400 hover:text-white" to="/whitepaper">How To Play</Link>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Coming Soon</h2>
                    <nav className="list-none mb-10">
                    <li>
                    <Link to="/" className="text-gray-400 hover:text-white">Genesis Cattle</Link>
                    </li>
                    <li>
                    <Link to="/" className="text-gray-400 hover:text-white">Lands</Link>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">The Creator</h2>
                    <nav className="list-none mb-10">
                    <li>
                    <a href="https://www.facebook.com/Trinitycodes/" className="text-gray-400 hover:text-white">Trinity Vandenacre</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Get Involved</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-400 hover:text-white" href="https://t.me/cattlekings">Telegram</a>
                    </li>
                    <li>
                        <a className="text-gray-400 hover:text-white" href="https://discord.gg/sKWGVMrRs6">Discord</a>
                    </li>
                    <li>
                        <a className="text-gray-400 hover:text-white" href="https://twitter.com/cattlekingsnft">Twitter</a>
                    </li>
                    <li>
                        <a className="text-gray-400 hover:text-white" href="https://www.facebook.com/Cattle-Kings-109588284832351">Facebook</a>
                    </li>
                    </nav>
                </div>
                </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-400 text-sm text-center sm:text-left">© 2021 Cattle Kings LLC —
                    <a href="https://twitter.com/cattlekingsnft" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@CattleKingsNFT</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a className="text-gray-400" href="https://www.facebook.com/Cattle-Kings-109588284832351">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href="https://twitter.com/cattlekingsnft">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                </span>
                </div>
            </div>
        </footer>
  
    )
  
  };
  
  export default Footer;
    