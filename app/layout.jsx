// import './globals.css'
import '../styles/dist.css'
import { Josefin_Sans } from "@next/font/google"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefinSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=''>{children}</body>
    </html>
  )
}
