import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";


const App = () => {
  let [showContent, setShowContent] =  useState(false);
  useGSAP(()=> {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate : 10,
      duration : 2,
      ease:"power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    .to('.vi-mask-group',{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(()=>{

    if(!showContent) return;

    gsap.to(".main",{
      scale: 1,
      rotate:0,
      duration: 2,
      delay:"-1",
      ease:"Expo.easeInOut"
    });
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.7",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.7",
      ease: "Expo.easeInOut",
    });
    gsap.to(".charecter",{
      scale:0.7,
      x:"-50%",
      rotate:0,
      duration:2,
      delay:"-.7",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-.7",
      ease: "Expo.easeInOut",
    });



    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text" ,{
        x:`${-50 -xMove * 0.4}%`,
      });
       gsap.to(".sky" ,{
        x: xMove,
      });
       gsap.to(".bg" ,{
        x: xMove *1.7,
      })

      
    });
  },[showContent]);



  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[rgb(0,0,0)] '>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='viMask'>
              <rect width="100%" height="100%" fill='black'/>
              <g className='vi-mask-group'>
                <text 
                   x='50%'
                   y='50%'
                   fontSize="250"
                   textAnchor='middle'
                   fill='white'
                   dominantBaseline="middle"
                   fontFamily='Arial Black'
                   >VI</text> 
              </g>
            </mask>
          </defs>
          <image 
            href='./bg.png'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            mask='url(#viMask)'
            />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
              <div className='logo flex gap-7'>
                <div className='lines flex flex-col gap-1.5'>
                  <div className='line w-10 h-1 bg-white'></div>
                   <div className='line w-8 h-1 bg-white'></div>
                   <div className='line w-6 h-1 bg-white'></div>
                </div>
                <h3 className='text-4xl -mt-[11px] leading-none  text-white'>Rockstar</h3>
              </div>
            </div>
            <div className='imagesdiv relative overflow-hidden w-full h-screen '>
              <img className=" sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
              <img className=" bg absolute scale-[1.8] rotate-[-4deg] top-0 left-0 w-full h-full object-cover " src="./bg.png" alt="" />
              <div className='text text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]'>
              <h1 className='text-[11rem] leading-none -ml-40'>grand</h1>
              <h1 className='text-[11rem] leading-none ml-20'>theft</h1>
              <h1 className='text-[11rem] leading-none -ml-40'>auto</h1>
            </div>
              <img className='charecter absolute -bottom-[30%] left-1/2 -translate-x-1/2 scale-[2] rotate-[-10deg] ' src="./me.png" alt="" />
            
            </div>
            <div className='btmbar text-white  absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent '>
              <div className='flex gap-4 items-center'>
                <h3 className='font-serif '>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]' src="./ps5.png" alt="" />
              <h3 className='text-xl relative left-330'>Create by : Dhruvil Mistry</h3>
            </div>
          </div>
          <div className='w-full h-screen flex items-center justify-center px-10 bg-black '>
            <div className='cntnr flex text-white w-full h-[80%] '>
               <div className='limg relative w-1/2 h-full'>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
            </div>
            <div className='rg w-[30%] py-20'>
              <h1 className='text-7xl'> Still Running </h1>
              <h1 className='text-7xl'> Not Hunting </h1>
              <p className='mt-10 text-xl font-[Helvetica_Now_Display'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe, repellat dignissimos deserunt rerum sit consequatur exercitationem optio doloribus quo a vero provident veritatis quis.</p>
              <p className='mt-3 text-xl font-[Helvetica_Now_Display'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt earum ducimus sed?</p>
              <button className='bg-yellow-500 px-10 py-10 mt-10 text-4xl text-black'>Download Now</button>
            </div>
            </div>
           
          </div>
        </div>
      )}
    </>
  )
}

export default App
