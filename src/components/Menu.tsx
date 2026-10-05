   import Link from "next/link";

   export default function Menu() {
     return (
       <nav>
         <Link href="/">Início</Link>
         <Link href="/sobre">Sobre</Link>
         <Link href="/contato">Contato</Link>
         <Link href="/projetos">Projetos</Link>
       </nav>
     );
   }