import Image from 'next/image'
import ChatBot from './components/chatbot/chatbot'
import { NavbarDefault } from './components/navbar/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-400 p-5 bg-tomatoes-bg bg-custom-size bg-no-repeat">
      <div className='flex flex-col w-full'>
        <NavbarDefault />
        <ChatBot />
        <div className="my-[15rem] mx-10 max-w-4xl">
          <h1 className="text-[11rem] font-extrabold font-logo text-white leading-tight">Let's cook together</h1>
          <p className="text-[2rem] text-white mt-4 font-serif">Let's make cooking stressless and fun with our exclusive, world-class recipes</p>
        </div>


      </div >

    </main >
  )
}
