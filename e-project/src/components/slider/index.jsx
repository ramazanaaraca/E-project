import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from "prop-types"

export default function Slider({ spaceBetween, slidesPerView, items, render, ...props }) {
  return (
    <Swiper
      {...props}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    >
      {items?.map((item, key) => (
        <SwiperSlide key={key}>
          {render(item, key)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

Slider.propTypes = {
  spaceBetween:  PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slidesPerView: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  items: PropTypes.array,
  render: PropTypes.func,
  props: PropTypes.object
}

Slider.defaultProps = {
  spaceBetween: 30,
  slidesPerView: 1
}