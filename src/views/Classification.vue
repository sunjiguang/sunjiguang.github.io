<template>
  <div class="loading"
  
  >
	<div class="three">
		<!-- <router-link to="/buka/class#78"> -->
		<span>
		<img src="@/assets/images/1.png" alt=""><p>已完结</p>
		</span>
		<!-- </router-link> -->
		<span>
		<img src="@/assets/images/2.jpg" alt=""><p>视频解锁</p>
		</span>
		<span>
		<img src="@/assets/images/3.jpg" alt=""><p>付费漫画</p>
		</span>
	</div>  
	<div class="three">
		<span>
		<img src="@/assets/images/4.png" alt=""><p>已完结</p>
		</span>
		<span>
		<img src="@/assets/images/5.jpg" alt=""><p>视频解锁</p>
		</span>
		<span>
		<img src="@/assets/images/6.jpg" alt=""><p>付费漫画</p>
		</span>
	</div>  
	<div class="three">
		<span>
		<img src="@/assets/images/7.jpg" alt=""><p>已完结</p>
		</span>
		<span>
		<img src="@/assets/images/8.png" alt=""><p>视频解锁</p>
		</span>
		<span>
		<img src="@/assets/images/9.jpg" alt=""><p>付费漫画</p>
		</span>
	</div>  
	<div class="three">
		<span>
		<img src="@/assets/images/10.jpg" alt=""><p>已完结</p>
		</span>
		<span>
		<img src="@/assets/images/11.jpg" alt=""><p>视频解锁</p>
		</span>
		<span>
		<img src="@/assets/images/12.jpg" alt=""><p>付费漫画</p>
		</span>
	</div>  
	<div class="three">
		<span>
		<img src="@/assets/images/13.jpg" alt=""><p>已完结</p>
		</span>
		<span>
		<img src="@/assets/images/14.jpg" alt=""><p>视频解锁</p>
		</span>
		<span>
		<img src="@/assets/images/15.png" alt=""><p>付费漫画</p>
		</span>
	</div>  
	<div class="three">
		<span>
		<img src="@/assets/images/16.jpg" alt=""><p>已完结</p>
		</span>
<!-- 		<span>
		<img src="@/assets/images/2.jpg" alt=""><p>视频解锁</p>
		</span>
		<span>
		<img src="@/assets/images/3.jpg" alt=""><p>付费漫画</p>
		</span> -->
	</div>  
    
  </div>
</template>

<script>
  export default {
    name:'loading',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    computed:{},
    methods:{
		// goto(){
			
		// }
	}
  }
</script>

<style lang="scss" scoped>
	.loading{
		padding: 28px 14px ;
	}
  .three{
	  display: flex;
	  justify-content: space-between;
	  img{
		  width: 90px;
		  height: 90px;
		  border-radius: 50%;
	  }
	  p{
		  text-align: center;
		  font-size: 18px;
		  margin: 10px 0 50px;
	  }
  }
</style>
