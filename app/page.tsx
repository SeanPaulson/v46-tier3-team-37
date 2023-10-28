import Card from '@/components/uiComponents/Card'
import Button from '@/components/uiComponents/Button'
import Image from 'next/image'

const itemDescription = 'Text items details description text items details description text items details description text items details description tails description text items details description text items details description text items details description '
const itemTitle = 'Green Lawn Mower'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center">
      <section >
        <div className='my-8'>
          <Image src='/heroImage.png' alt='image of tools' width='379' height='220' className='rounded-md' />
        </div>
        <h1 className='font-bold text-center text-lg'>Find tools to rent here on Rent A Wrench!</h1>
        {/* <search by location and date component */}
        <div >
          <form className='flex flex-col gap-6 justify-center my-4'>
            <input readOnly type='text' value={'Texas'} className='border border-[lightgray] rounded-sm w-full' placeholder='Location' />
            <div className='flex justify-center gap-4 bg-[lightgray] h-16 p-2 '>
              <input className='rounded-sm' type='date' min={new Date().toISOString().split('T')[0]} required />
              <p className='self-center text-[gray] h-full border border-[gray]'></p>
              <input className='rounded-sm' type='date' min={new Date().toISOString().split('T')[0]} required />
            </div>
            <Button className='font-bold text-xl' size='lg'>Search</Button>
          </form>
        </div>
      </section>
      <section className='w-full lg:px-56 p-4 text-center'>
        <h1 className='font-bold text-2xl mb-8'>Featured Listings</h1>
        <div className='flex justify-center gap-4 flex-wrap'>
          <Card className='md:basis-1/4' title='hammer'/>
          <Card className='md:basis-1/4' title='hammer'/>
          <Card className='md:basis-1/4' title='hammer'/>
          <Card className='md:basis-1/4' title='hammer'/>
          <Card className='md:basis-1/4' title='hammer'/>
          <Card className='md:basis-1/4' title='hammer'/>
          <Card className='md:basis-1/4' title='hammer'/>
          <Card className='md:basis-1/4' title='hammer'/>
        </div>
      </section>
    </main>
  )
}