<template>
  <aside :class="`${isExpanded && 'is-expanded'}`">
    <div class="logo">
        <img src="../assets/logo.svg" alt="VUE">
    </div>

    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
    </div>


    <h3>MENU</h3>
    <div class="menu">

        <router-link classs="button" to="/">
            <span class="material-icons">home</span>
            <span class="text">ww</span>
        </router-link>

        <router-link class="button" to="/about">
            <span class="material-icons">home</span>
            <span class="text">about</span>
        </router-link>

        <router-link class="button" to="/money">
            <span class="material-icons money">home</span>
            <span class="text">Money</span>
        </router-link>

        <router-link class="button" to="/">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
        </router-link>

    </div>


  </aside>
</template>
 
<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

    const ToggleMenu= () => isExpanded.value = !isExpanded.value;

 

</script>

<style lang="scss" scoped>

aside{
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
 
    background-color: var(--dark);
	color: var(--light);

    transition: 0.2s ease-in-out;
  
	.flex {
		flex: 1 1 0%;
	}

    .logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

    .menu-toggle-wrap{
        display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

        .menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}



        span{
            color:#fff;
            font-size: 2rem;
        }
    }

    h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

    h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

    .menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	 

    &.is-expanded{
        width: var(--sidebar-width);
         
    }
     @media (max-width:768px) {
        position: fixed;
        z-index: 99;
     }
    }
</style>