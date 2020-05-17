<template>

	
	<van-tabbar v-model="active"
	
	:fixed="false"
	:border="false"
	active-color="#fe960e"
	:router="true"
	>
		<van-tabbar-item
		v-for="(l,i) in liebiao" 
		:to="{name:l.name}"
		:key="i"
		style="font-size: 36px;"
		>{{l.txt}}</van-tabbar-item>

	</van-tabbar>
</template>
<script>
	
  export default {
    name:'loading',
    props:{
		border:Boolean,
	},
    data(){
      return {
        active: 0,
		liebiao:[
			{txt:"推荐",name:"recommend"},
			{txt:"排行",name:"ranking"},
			{txt:"分类",name:"classification"},
		]
		
      }
    },
    components:{},
    mounted(){},
    updated(){},
    computed:{},
    methods:{
	}
  }
</script>

<style lang="scss" scoped>
  .loading{}
</style>
