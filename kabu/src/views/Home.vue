<template>
  <div class="home">
	<div class="top">
	<Head :border="false"></Head>
	<Tab :border="true"></Tab>
	</div>
		<router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .top{
	border-bottom: 1px solid rgba(0,0,0,.18);
  }
</style>