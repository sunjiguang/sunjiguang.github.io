<template>
	<div>
		<div class="top">
		<van-search
			v-model="key"
			show-action
			placeholder="漫画 | 作者 | 资讯 | 漫展"
			@search="onSearch"
			class="xxk"
		>
			<template #left>
				<van-icon name="arrow-left" @click="gotoup" size="25" color="#999"/>
			</template>
			<template #action>
				<van-button type="primary" color="#fe960e" @click="todoSearch">搜索</van-button>
			</template>
		</van-search>
		</div>
		<div>
			<p class="hot">热门搜索</p>			
		</div>
		<div class="btn">
			
			<div class="bu">我家大师兄脑子有坑</div>
			<div class="bu">英雄我早就不当了</div>
			<div class="bu">绝世武神</div>
			<div class="bu">当神不让</div>
			<div class="bu">非人哉</div>
			
			
			
			
		</div>
		
	</div>
</template>

<script>
  export default {
    name:'search',
    props:{},
    data(){
      return {
        key:"",
      }
    },
    components:{},
    mounted(){
	},
    updated(){},
    computed:{},
    methods:{
		gotoup(){
			this.$router.go(-1)
		},
			
		onSearch(value){
			console.log(value)
		},
		todoSearch(){
			console.log(this.key)
		},
		
	}
  }
</script>

<style lang="scss" scoped>
	.bu{
		display: inline-block;
		color: #666;
		border: 1px solid #ccc;
		border-radius: 20px;
		padding: 5px 12px;
		margin: 5px;
	}
	.btn{
		text-align: left;
	}
	.xxk{
		font-size: 50px;
		border-bottom: 1px solid #f1f1f1 ;
	}

	.hot{
		text-align: left;
		color: #999;
		font-size: 16px;
		padding:0 10px ;
		display: block;
	}
</style>
