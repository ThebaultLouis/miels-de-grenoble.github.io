<template>
  <div class="testimonial-slider">
    <button
      class="slider-btn prev-btn"
      :disabled="currentIndex === 0"
      @click="prevSlide"
    >
      <IconArrowLeft />
    </button>

    <div class="testimonial-slides">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.id"
        class="testimonial-slide"
        :class="{ active: index === currentIndex }"
      >
        <div class="testimonial-content">
          <div class="testimonial-rating">
            <IconStar v-for="i in testimonial.rating" :key="i" class="star" />
          </div>
          <p class="testimonial-text">"{{ testimonial.text }}"</p>
          <p class="testimonial-author">{{ testimonial.name }}</p>
        </div>
      </div>
    </div>

    <button
      class="slider-btn next-btn"
      :disabled="currentIndex === testimonials.length - 1"
      @click="nextSlide"
    >
      <IconArrowRight />
    </button>

    <div class="testimonial-dots">
      <button
        v-for="(testimonial, index) in testimonials"
        :key="`dot-${testimonial.id}`"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      autoPlayInterval: null,
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.testimonials.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.testimonials.length - 1;
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
  },
};
</script>

<style scoped>
.testimonial-slider {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 60px;
}

.testimonial-slides {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.testimonial-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.testimonial-slide.active {
  opacity: 1;
}

.testimonial-content {
  text-align: center;
  max-width: 600px;
}

.testimonial-rating {
  margin-bottom: 20px;
  color: #ffc107;
  font-size: 1.25rem;
}

.star {
  margin: 0 2px;
}

.testimonial-text {
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.6;
}

.testimonial-author {
  font-weight: 600;
  color: #5d4037;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  color: #5d4037;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

.slider-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d7ccc8;
  margin: 0 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #5d4037;
}
</style>