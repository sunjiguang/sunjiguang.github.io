<template>
  <div class="loading">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
	v-for="(pt,i) in photo"
	:key="i"
	>
	<!-- {{pt.pic_url}} -->
		<img :src="pt.pic_url" alt="" class="img">
	</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name:'loading',
    props:{},
    data(){
      return {
        photo:[]
      }
    },
    components:{},
    mounted(){
		
		this.$axios({
				url:"/buka/api/v3/home?page=1",
			}).then(res => {
				this.photo = res.data.datas.items[0].items;
			});
	},
    updated(){},
    computed:{},
    methods:{}
  }
</script>

<style lang="scss" scoped>
  .img{
	width: 100%;
	height: 200px;
  }
</style>
