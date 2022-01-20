<template>
  <svg
    :class="[prefixCls, $attrs.class, spin && 'svg-icon-spin']"
    :style="getStyle"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script lang="ts" name="SvgIcon" setup>
  import type { CSSProperties } from 'vue';
  import { computed, defineProps } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { Iconfont } from '/@/enums/iconfontEnum';

  const props = defineProps({
    prefix: {
      type: String as PropType<string>,
      default: 'icon',
    },
    name: {
      type: String as PropType<string>,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    spin: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const { prefixCls } = useDesign('svg-icon');
  const isIconfont = props.name.startsWith(Iconfont.PREFIX);
  const symbolId = computed(() => {
    return isIconfont ? `#${props.name}` : `#${props.prefix}-${props.name}`;
  });

  const getStyle = computed((): CSSProperties => {
    const { size } = props;
    let s = `${size}`;
    s = `${s.replace('px', '')}px`;
    return {
      width: s,
      height: s,
    };
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-svg-icon';

  .@{prefix-cls} {
    display: inline-block;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
  }

  .svg-icon-spin {
    animation: loadingCircle 1s infinite linear;
  }
</style>
