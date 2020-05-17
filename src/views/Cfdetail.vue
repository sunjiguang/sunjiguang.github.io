<template>
	
  <div class="cfdetail">
	<Head :border="false" title="布卡漫画"></Head>
	<span  class="tp" v-for="(p,i) in list" :key="i">
		<div>
			<img :src="p.logo" alt="" >
			<p class="name">{{i+1}}.{{p.name}}</p>
			<p class="author">{{p.author}}</p>
		</div>
	</span>
  </div>
</template>

<script>
  export default {
    name:'cfdetail',
    props:{},
    data(){
      return {
        list:[],
		num:0,
      }
    },
    components:{},
    mounted(){
		this.$axios({
			url:"/buka/category/ajax_group"
		}).then(res=>{
			console.log(res.data.datas.items)
			this.list = res.data.datas.items
		})
	},
    updated(){},
    computed:{},
    methods:{
		number(){

		}
	}
  }
</script>

<style lang="scss" scoped>
  .cfdetail{}
  .tp{
    
    display: inline;
    height: auto;
  }
  .tp>div{
	width: 30%;
	display: inline-block;
	margin:15px 1%;
  }
	img{
		width: 100%;
		height: auto;
		
	}
  p{
	
	overflow: hidden;
	width: 120px;
	text-overflow:ellipsis;
	white-space: nowrap;
  }
  .author{
		
		color: #999;
	}
  
</style>
