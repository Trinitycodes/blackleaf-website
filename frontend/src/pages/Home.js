// import { useNavigate } from "react-router-dom";

const Home = () => {
    // let navigate = useNavigate();

    function goToShop() {
        //navigate("/shop");
    }

    return (<>
        
        <section className="text-gray-600 body-font bg-suncanyon bg-local bg-cover bg-right">
        <div className="mx-auto w-full pt-24 pb-24 sm:pb-80 bg-gradient-to-br from-zinc-700/40 items-center justify-center">
             <div className="mx-auto text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 sm:mb-10 font-medium font-mythic text-white">The NFT Ranching Game!</h1>
            <p className="mb-8 leading-relaxed font-antique text-white sm:text-2xl sm:pb-12">Breed, Raise, and Sell....<br /> your own herd of Cattle in the Digital West!</p>
            <div className="flex justify-center">
                <button onClick={goToShop} className="inline-flex text-black bg-white border-0 py-4 px-10 focus:outline-none hover:bg-yellow-600 rounded text-lg font-mythic">Get Started</button>
            </div>
            </div>
        </div>
        </section>

        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900 font-mythic">Toughness
                <br className="hidden lg:inline-block" /><span className="font-antique">is Your Objective!!</span>
            </h1>
            <p className="mb-8 leading-relaxed">Compete to raise the finest and healthiest herd of NFT cattle in world, and win <span className="font-bold">Cattle Kings Tokens</span>, Toughness NFT Badges, and breed Mythical Cattle!  
            <br className="hidden lg:inline-block" /><span className="font-bold text-red-700">BEWARE!!!!</span> Based on real life Ranching in Montana!  <span className="font-bold">Survival IS NOT easy!!</span></p>
            <p className="mb-8 leading-relaxed font-bold">It's Time!!!  Genesis Cattle are About to Spawn!!</p>
            <div className="flex justify-center">
                <button onClick={goToShop} className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 font-mythic rounded text-lg">Start Now</button>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x260" />
            </div>
        </div>
        </section>

        <section className="text-gray-600 body-font bg-desert bg-local bg-cover bg-left">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x260" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-gray-900 font-mythic">HOW to Become 
                <br className="hidden lg:inline-block" /><span className="font-antique">a Cattle King</span>
            </h1>
            <p className="mb-8 leading-relaxed">Buy some NFT cattle and hay to feed them.  Breed them to build your herd. <span className="font-bold text-red-700">WARNING!!!</span> You must protect your herd from predators, disease, drought, and starvation!</p>
            <p className="mb-8 leading-relaxed">Sometimes You will need to protect <span className="font-bold">YOURSELF</span> from your <span className="font-bold">Herd!</span> Time to GET TOUGH!</p>
            <div className="flex justify-center">
                <button onClick={goToShop} className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg font-mythic">Get Tough Now</button>
               
            </div>
            </div>
        </div>
        </section>

        <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-8 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <img className="w-full object-cover object-center mb-6" src="https://dummyimage.com/420x260" alt="content" />
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <img className="w-full object-cover object-center mb-6" src="https://dummyimage.com/420x260" alt="content" />
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <img className="w-full object-cover object-center mb-6" src="https://dummyimage.com/420x260" alt="content" />
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <img className="w-full object-cover object-center mb-6" src="https://dummyimage.com/420x260" alt="content" />
            </div>
            </div>
        </div>
        </section>

        <section className="text-gray-600 body-font bg-stone-900">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-2xl font-medium title-font text-amber-400 mb-4 font-mythic">GENETICS</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">The <span className="font-antique">Cattle Kings Game</span> is built on the blockchain, so the cattle are tokens <span className="font-bold">( NFT's )</span>.  When a <span className="font-bold">Cow NFT</span> and a <span className="font-bold">Bull NFT</span> are selected for breeding, the genetics are mixed and a new <span className="font-bold">Cattle Token is Minted</span> with its very own characteristics!</p>
            <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                
            </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/420x260" />
                </div>
                <div className="flex-grow">
                <h2 className="text-white text-2xl sm:text-3xl title-font font-medium mb-3 font-fred font-bold">Grazing Index</h2>
                <p className="leading-relaxed text-white">Determines what climate and areas the particular animal will perform to its <span className="font-bold">Maximum</span> potential.</p>
                <a href="/whitepaper#grazing-index-info" className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/420x260" />
                </div>
                <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3 font-fred sm:text-3xl text-2xl">Calf Count</h2>
                <p className="leading-relaxed text-white">The number of calves the specific cow can have during her lifespan.  This number can change if well cared for.  <span className="font-bold">Usually 10.</span>.</p>
                <a href="/whitepaper#calf-count-info" className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/420x260" />
                </div>
                <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3 font-fred sm:text-3xl text-2xl">Mythicals</h2>
                <p className="leading-relaxed text-white">When breeding 2 <span className="font-bold">Purebreds</span> of the same breed or of different breeds, you have a very small chance to produce a <span className="font-antique font-bold font-blue-800">MYTHICAL</span>!  These are very rare Cattle NFT's with special production powers.</p>
                <a href="/whitepaper#mythicals-info" className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
            <button onClick={goToShop} className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg font-mythic">Start Now</button>
        </div>
        </section>
        
        </>);

}

export default Home;