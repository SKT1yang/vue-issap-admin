<template>
  <SvgIcon :size="size" :name="getSvgIcon" :class="[$attrs.class, 'anticon']" :spin="spin" />
</template>
<script lang="ts" name="Icon" setup>
  import type { PropType } from 'vue';
  import { computed } from 'vue';
  import SvgIcon from './SvgIcon.vue';

  const props = defineProps({
    prefix: {
      type: String as PropType<string>,
      default: 'icon',
    },
    icon: {
      type: String as PropType<string>,
      default: '',
    },
    color: {
      type: String as PropType<string>,
    },
    size: {
      type: [Number, String] as PropType<string | number>,
      default: 16,
    },
    spin: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const SVG_END_WITH_FLAG = '|svg';
  const getSvgIcon = computed(() => props.icon.replace(SVG_END_WITH_FLAG, ''));
</script>
