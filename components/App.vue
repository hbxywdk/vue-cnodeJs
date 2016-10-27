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
import { addplus } from '../vuex/actions.js'
import Heade from './Heade.vue'
import Foot from './Foot.vue'
import Login from './Login.vue'
import selfInfo from './selfInfo.vue'

export default{
	data(){
		return {
			a:1
		}
	},
	store,
	vuex: {
	  getters: {
	    b: state => state.notes,
	    c: state => state.test
	  },
      actions: {
        addplus
      }
	},
	components:{
		Heade,
		Foot,
		selfInfo		
	}
}

</script>
<style>

</style>
