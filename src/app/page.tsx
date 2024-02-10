import Header from './components/Header'
import LeftMainDiv from './components/LeftMainDiv'
import RightMainDiv from './components/RightMainDiv'

export default function Home() {
  return (
    <div>
      <main className="max-w-6xl mx-auto relative flex flex-col gap-10 overflow-hidden">
        <Header />
        <section className="w-[90%] mx-auto">
          <div className='flex gap-20'>
            <LeftMainDiv />
            <RightMainDiv />
          </div>
        </section>
      </main>
    </div>
  )
}
