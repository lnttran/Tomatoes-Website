import Image from 'next/image'
import ChatBot from './components/chatbot/chatbot'
import { NavbarDefault } from './components/navbar/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-400 p-5 bg-tomatoes-bg bg-custom-size bg-no-repeat">
      <div className='flex flex-col w-full'>
        <NavbarDefault />
        <div className='relative h-screen'>
          <div className="absolute lg:top-[20%] lg:left-[2%] md:top-[8%] md:left-[2%] sm:left-[2%] sm:top-[10%] lg:max-w-4xl md:max-w-2xl sm:max-w-xl h-screen">
            <h1 className="lg:text-[11rem] md:text-[6rem] sm:text-[4rem] font-extrabold font-logo text-white leading-tight">Let's cook together</h1>
            <p className="lg:text-[2.5rem] sm:text-[20px] text-white mt-4 lg:max-w-4xl md:max-w-xl sm:max-w-sm font-serif">Let's make cooking stressless and fun with our exclusive, world-class recipes</p>
          </div>
        </div>
        <ChatBot />

      </div >

    </main >
  )
}
