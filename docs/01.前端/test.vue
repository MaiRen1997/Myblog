<template>
  <view
	  id="view"
	  class="main"
		:hover-class="hover_class ? 'is-parent-hover' : 'none'"
	>
    <view 
      id="view-child1"
    class="test-view"
      :class="{ 'dark-mode': isDarkMode }"
      :hover-class="hover_class ? 'is-hover' : 'none'"
      :hover-stop-propagation="stop_propagation"
      :hover-start-time="start_time"
      :hover-stay-time="stay_time"
    >
    </view>
  </view>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, ref } from 'vue'
</script>

<style lang="less" scoped></style>
