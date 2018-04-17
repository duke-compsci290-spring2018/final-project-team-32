<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue';
import $ from 'jquery';
// Check if the request came from the browser and is not server rendered
if (typeof window !== 'undefined') {
  const slick = require('slick-carousel')
}
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'node_modules/slick-carousel/slick/slick.css' }
    ]
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.create();
  },
  destroyed() {
    $(this.$el).slick('unslick');
  },
  methods: {
    create() {
      const $slick = $(this.$el);
      $slick.on('afterChange', this.onAfterChange);
      $slick.on('beforeChange', this.onBeforeChange);
      $slick.on('breakpoint', this.onBreakpoint);
      $slick.on('destroy', this.onDestroy);
      $slick.on('edge', this.onEdge);
      $slick.on('init', this.onInit);
      $slick.on('reInit', this.onReInit);
      $slick.on('setPosition', this.onSetPosition);
      $slick.on('swipe', this.onSwipe);
      $slick.on('lazyLoaded', this.onLazyLoaded);
      $slick.on('lazyLoadError', this.onLazyLoadError);
      $slick.slick(this.options);
    },
    destroy() {
      const $slick = $(this.$el);
      $slick.off('afterChange', this.onAfterChange);
      $slick.off('beforeChange', this.onBeforeChange);
      $slick.off('breakpoint', this.onBreakpoint);
      $slick.off('destroy', this.onDestroy);
      $slick.off('edge', this.onEdge);
      $slick.off('init', this.onInit);
      $slick.off('reInit', this.onReInit);
      $slick.off('setPosition', this.onSetPosition);
      $slick.off('swipe', this.onSwipe);
      $slick.off('lazyLoaded', this.onLazyLoaded);
      $slick.off('lazyLoadError', this.onLazyLoadError);
      $(this.$el).slick('unslick');
    },
    reSlick() {
      this.destroy();
      this.create();
    },
    next() {
      $(this.$el).slick('slickNext');
    },
    prev() {
      $(this.$el).slick('slickPrev');
    },
    pause() {
      $(this.$el).slick('slickPause');
    },
    play() {
      $(this.$el).slick('slickPlay');
    },
    goTo(index, dontAnimate) {
      $(this.$el).slick('slickGoTo', index, dontAnimate);
    },
    currentSlide() {
      return $(this.$el).slick('slickCurrentSlide');
    },
    add(element, index, addBefore) {
      $(this.$el).slick('slickAdd', element, index, addBefore);
    },
    remove(index, removeBefore) {
      $(this.$el).slick('slickRemove', index, removeBefore);
    },
    filter(filterData) {
      $(this.$el).slick('slickFilter', filterData);
    },
    unfilter() {
      $(this.$el).slick('slickUnfilter');
    },
    getOption(option) {
      $(this.$el).slick('slickGetOption', option);
    },
    setOption(option, value, refresh) {
      $(this.$el).slick('slickSetOption', option, value, refresh);
    },
    setPosition() {
      $(this.$el).slick('setPosition');
    },
    // Events
    onAfterChange(event, slick, currentSlide) {
      this.$emit('afterChange', event, slick, currentSlide);
    },
    onBeforeChange(event, slick, currentSlide, nextSlide) {
      this.$emit('beforeChange', event, slick, currentSlide, nextSlide);
    },
    onBreakpoint(event, slick, breakpoint) {
      this.$emit('breakpoint', event, slick, breakpoint);
    },
    onDestroy(event, slick) {
      this.$emit('destroy', event, slick);
    },
    onEdge(event, slick, direction) {
      this.$emit('edge', event, slick, direction);
    },
    onInit(event, slick) {
      this.$emit('init', event, slick);
    },
    onReInit(event, slick) {
      this.$emit('reInit', event, slick);
    },
    onSetPosition(event, slick) {
      this.$emit('setPosition', event, slick);
    },
    onSwipe(event, slick, direction) {
      this.$emit('swipe', event, slick, direction);
    },
    onLazyLoaded(event, slick, image, imageSource) {
      this.$emit('lazyLoaded', event, slick, image, imageSource);
    },
    onLazyLoadError(event, slick, image, imageSource) {
      this.$emit('lazyLoadError', event, slick, image, imageSource);
    },
  },
};
</script>

<style>
/* Slider */
.slick-slider
{
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
}
.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}
</style>