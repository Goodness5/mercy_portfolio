import Image from 'next/image'
import Resume from './components/resume'
import Aboutme from './components/aboutme'
export default function Home() {
  return (
   <div className=" flex py-8">
<Resume />
<Aboutme />
   </div>
  )
}
