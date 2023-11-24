import React,{useCallback, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
    const [emblaRef,emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    

  return (
    <div className="embla" ref={emblaRef}>

      <div className="embla__container">
        <div className="embla__slide"><img src = "https://picsum.photos/id/1018/1000/600/"/></div>
        <div className="embla__slide"><img src = "https://picsum.photos/id/1015/1000/600/"/></div>
        <div className="embla__slide"><img src = "https://picsum.photos/id/1019/1000/600/"/></div>
      </div>

    </div>
  )
}
