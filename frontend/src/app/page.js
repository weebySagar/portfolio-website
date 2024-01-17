import Image from 'next/image';
import "./assets/styles/global/_global.scss";

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>Hello</div>
      <h1>title</h1>
      <Link href='/'>Home</Link>
     
<br />
  <button class="button-primary">
    <span>hover me 3</span>
  </button>

  <br />


  <button class="button-secondary">
    <span>hover me 3</span>
  </button>
    </>
  )
}
