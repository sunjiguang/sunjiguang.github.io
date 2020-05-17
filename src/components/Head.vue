<template>
	<div class="head">
    <van-nav-bar fixed=fixed placeholder=placeholder  :border="border" :title="title">
        <template #left>
            <van-image width="80" height="80" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1344364829,1683100672&fm=26&gp=0.jpg" @click="gotoHome"/>
        </template>
        <template #right>
            <van-icon v-if="!search" @click="gotoSearch" name="search" color="#fe960e" size="60" />
        </template>
    </van-nav-bar>
	</div>
</template>

<script>
export default {
	data(){
		return{
			fixed:true,
			placeholder:true
		}
	},
    props:{
        border:Boolean,
        login:Boolean,
        search:Boolean,
		title:String
    },
    methods:{
        gotoLogin(){
            this.$router.push({name:"login"})
        },
        gotoSearch(){
            this.$router.push({name:"search"})
        },
		gotoHome(){
			this.$router.push({name:"recommend"})
		}
    }
}
</script>
<style lang="scss" scoped>
.head{
	// padding-top: 20px;
}
</style>