'use client'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { Parallax } from 'react-parallax'
import Slider from 'react-slick'
import { Play, Pause, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Script from 'next/script'

// Assume these are imported from your public folder
const backgroundImage = '/window.svg?height=1080&width=1920'
const girlfriendImages = [
  '/pic1.jpg?height=400&width=600',
  '/pic2.jpg?height=400&width=600',
  '/pic3.jpg?height=400&width=600',
  '/pic4.jpg?height=400&width=600',
  '/pic5.jpg?height=400&width=600',
  '/pic6.jpg?height=400&width=600',
  '/pic7.jpg?height=400&width=600',
  '/pic8.jpg?height=400&width=600',
  '/pic9.jpg?height=400&width=600',
  '/pic10.jpg?height=400&width=600',
  '/pic11.jpg?height=400&width=600',
  '/pic12.jpg?height=400&width=600',
  '/pic13.jpg?height=400&width=600',
  '/pic14.jpg?height=400&width=600',
  '/pic15.jpg?height=400&width=600',
  '/pic16.jpg?height=400&width=600',
  '/pic17.jpg?height=400&width=600',
  '/pic18.PNG?height=400&width=600',
]
const songs = [
  { title: 'Not a Bad Thing', src: '/notabadthing.mp3' },
  { title: 'Mirrors', src: '/Mirrors.mp3' },
  { title: 'Ước Gì', src: '/UOCGI.mp3' },
  { title: 'If I Aint Got You', src: '/ifiaintgotyou.mp3' },
  { title: 'The Perfect Pair', src: '/perfectpair.mp3' },
  { title: 'Teenage Dream', src: '/teenagedream.mp3' },
  { title: 'MOOO!', src: '/moo.mp3' },
  { title: 'What Once Was', src: '/whatoncewas.mp3' },
  { title: 'See You Again', src: '/seeyouagain.mp3' },
  { title: 'End of Beginning', src: '/endofbeginning.mp3' },
  { title: 'Glue Song', src: '/gluesong.mp3' },
  { title: 'Espresso', src: '/espresso.mp3' },
  { title: 'Love Me', src: '/Love Me.mp3' },
  { title: 'Your Teeth In My Neck', src: '/Your Teeth In My Neck.mp3' },
  { title: 'Stuttering', src: '/stuttering.mp3' },
  { title: 'My Type', src: '/mytype.mp3' },
  { title: 'Million Dollar Baby', src: '/milliondollarbaby.mp3' },
  { title: 'Chasing Pavements', src: '/chasingpavements.mp3' },
  { title: 'Nasty', src: '/nasty.mp3' },
  { title: 'Drowning Love', src: '/drowninglove.mp3' },
  { title: 'Sugar', src: '/sugar.mp3' },
  { title: 'I Love You So', src: '/iloveyouso.mp3' },
  { title: 'Magnetic', src: '/magnetic.mp3' },
  { title: 'No One Noticed', src: '/noonenoticed.mp3' },
  { title: 'Saturn', src: '/saturn.mp3' },
  { title: 'Die with a Smile', src: '/diewithasmile.mp3' },
]

export default function GirlfriendShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const audio = new Audio(currentSong.src)
    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
    return () => {
      audio.pause()
    }
  }, [isPlaying, currentSong])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      <Head>
        <title>Girlfriend Showcase</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/heart-animation.js" strategy="afterInteractive" />
      <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link to="hero" smooth={true} duration={500} className="text-xl font-bold text-pink-600 cursor-pointer">
              bribri
            </Link>
            <div className="space-x-4">
              <Link to="hero" smooth={true} duration={500} className="text-gray-800 hover:text-pink-600 cursor-pointer">
                Home
              </Link>
              <Link to="gallery" smooth={true} duration={500} className="text-gray-800 hover:text-pink-600 cursor-pointer">
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Parallax bgImage={backgroundImage} strength={500}>
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <canvas id="heart" className="absolute inset-0 w-full h-full"></canvas>
          <motion.div
            className="text-center relative z-10"
            style={{ opacity }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mt-8 text-4xl font-bold text-white shadow-text">hi brianna</h1>
          </motion.div>
          <Link to="gallery" smooth={true} duration={1000} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10">
            <ChevronDown className="w-10 h-10 text-white animate-bounce" />
          </Link>
        </section>
      </Parallax>

      <section id="gallery" className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Pics of Us {"<3"}</h2>
          <div className="mb-10">
            <Slider {...sliderSettings}>
              {girlfriendImages.map((img, index) => (
                <div key={index} className="px-2"> 
                  <img src={img} alt={`Girlfriend ${index + 1}`} style={{ height: '650px'}} className="w-full h-full object-contain rounded-lg" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-700 text-white"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Select onValueChange={(value) => setCurrentSong(songs.find(song => song.title === value) || songs[0])}>
              <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
                <SelectValue placeholder="Pick a song boo" />
              </SelectTrigger>
              <SelectContent className="max-h-48 overflow-y-auto">
                {songs.map((song, index) => (
                  <SelectItem key={index} value={song.title}>{song.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <section id="footer" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-extrabold text-center">10 MONTHS WOOOOO</h2>
      </div>
    </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  )
}