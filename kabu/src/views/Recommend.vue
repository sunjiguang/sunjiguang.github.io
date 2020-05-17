<template>
  <div class="recommend">
	<div><Swiper></Swiper></div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{list}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List1" :key="i" @click="goto(p.ctrlparam)">
			<!-- <router-link> -->
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
			<!-- </router-link> -->
		</span>
		</div>
	</div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{listb}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List2" :key="i"  @click="goto(p.ctrlparam)">
			
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
		</span>
		</div>
	</div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{listc}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List3" :key="i"  @click="goto(p.ctrlparam)">
			
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
		</span>
		</div>
	</div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{listd}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List4" :key="i"  @click="goto(p.ctrlparam)">
			
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
		</span>
		</div>
	</div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{liste}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List5" :key="i"  @click="goto(p.ctrlparam)">
			
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
		</span>
		</div>
	</div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{listf}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List6" :key="i"  @click="goto(p.ctrlparam)">
			
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
		</span>
		</div>
	</div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{listg}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List7" :key="i" @click="goto(p.ctrlparam)">
			
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
		</span>
		</div>
	</div>
	<div>
		<p class="biaoti" ><span class="shu"></span><i>{{listh}}</i></p>
		<div >
		<span  class="tp" v-for="(p,i) in List8" :key="i" @click="goto(p.ctrlparam)">
			
			<div>
			<img :src="p.pic_url" alt="" >
			<p class="title">{{p.title}}</p>
			<p class="subtitle">{{p.subtitle}}</p>
			</div>
		</span>
		</div>
	</div>
	<div class="footlogo">
		<van-image width="200" height="200" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1344364829,1683100672&fm=26&gp=0.jpg"/>
	</div>
  </div>
</template>

<script>
  export default {
    name:'recommend',
    props:{},
    data(){
      return {
        list:"",listb:"",listc:"",listd:"",liste:"",listf:"",listg:"",listh:"",
        List1:[],List2:[],List3:[],List4:[],List5:[],List6:[],List7:[],List8:[],
      }
    },
    components:{},
    mounted(){
		this.$axios({
			url:"/buka/api/v3/home?page=1",
		}).then(res => {
			// console.log( res.data.datas.items[1].title);
			this.list = res.data.datas.items[1].title;
			this.listb = res.data.datas.items[2].title;
			this.listc = res.data.datas.items[3].title;
			this.listd = res.data.datas.items[4].title;
			this.liste = res.data.datas.items[5].title;
			this.listf = res.data.datas.items[6].title;
			this.listg = res.data.datas.items[7].title;
			this.listh = res.data.datas.items[8].title;
			// console.log(this.list)
			this.List1 = res.data.datas.items[1].items;
			this.List2 = res.data.datas.items[2].items;
			this.List3 = res.data.datas.items[3].items;
			this.List4 = res.data.datas.items[4].items;
			this.List5 = res.data.datas.items[5].items;
			this.List6 = res.data.datas.items[6].items;
			this.List7 = res.data.datas.items[7].items;
			this.List8 = res.data.datas.items[8].items;
		});
	},
    updated(){},
    computed:{},
    methods:{
		goto(sb){
			window.location.href= '/buka/m/'+sb
			// window.loc.push('/buka/m/217885')
		}
	}
  }
</script>

<style lang="scss" scoped>
  .recommend{
	padding: 2%;
  }
  .tp>div>img{
	width: 100%;
  }
	.tp>div{
		width: 49%;
		display: inline-block;
		margin-top:15px;
	}

  .tp:first-child>div,.tp:first-child>div>img{
		width: 100%;
  }

  .tp:nth-child(even){
	margin-right: 2%;
  }
    
  .subtitle{
	overflow: hidden;
	width: 170px;
	text-overflow:ellipsis;
	white-space: nowrap;
  }
  .title{
	font-size: 16px;
	color: #333;
	margin: 5px 0;
	max-height: 38px;
  }
  .subtitle{
	font-size: 14px;
	color: #999;
  }
  .shu{
	display: inline-block;
	border-radius: 3px;
	margin-top: 1px;
	width: 3px;
	height: 15px;
	background: #fe960e;
	margin-right: 10px;
  }
  .biaoti{
	margin:15px 0;
	font-size: 18px;
	line-height: 20px;
  }
  .footlogo{
	text-align: center;
  }

</style>
