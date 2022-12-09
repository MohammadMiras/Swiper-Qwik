import { component$, useClientEffect$, useStore, useStyles$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import Swiper from 'swiper'
import{ Navigation, Pagination, Scrollbar } from 'swiper';


export default component$(() => {

  useClientEffect$(()=>{
    var swiper = new Swiper(".swiper", {
      hashNavigation: true,
      modules: [Navigation, Pagination],     
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })

  return (
    <>

     <div class=" h-24 swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
