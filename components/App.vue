<template>
	<heade></heade>
    <section class="main">
		<self-info></self-info>
		<router-view></router-view>
    </section>
    <foot></foot>
</template>
<script>
import store from '../vuex/store'
import Heade from './Heade.vue'
import Foot from './Foot.vue'
import selfInfo from './selfInfo.vue'

export default{
	data(){
		return {
			a:1
		}
	},
	store,
	components:{
		Heade,
		Foot,
		selfInfo		
	}
}
</script>

