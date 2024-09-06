<script setup>

//binding
  const message = 'Hello'
  const rawHtml = "<span>worlssssssd</span>"
  const buttonId = 'button-id'
  const isBtnDisabled = 'Truthy'

  const objectOfAttrs = {
        id: 'container',
        class: 'wrapper'
  }


const number = 1
const listString = 'a,b,c,d,e,f,g,h,i,j'
const convertId = (d) => d.split(',').reverse().join('-')

const attr = "href"
const  url = 'google.com'
const eventName = 'focues'
const doSomething = ()=>{ alert(1)}


//ref
import {computed, ref} from 'vue'
const count = ref(0)

count.value++



//nextTick
import { nextTick, reactive  } from 'vue';


const incr = async  ()=>

{
  count.value++

  await nextTick()

  console.log(count)
}



const book = reactive(
  {
    name:'Book 1',
    chapters: []
  }
)

const addChapter =()=>{
  book.chapters.push('chap 1')
  console.log(book)
}


const isPublished = computed(
  ()=>{
    return book.chapters.length > 0 ?'Co': 'Khong' 
  }
)


const isActive = ref(true)
const isActiveErr = ref(true)


const styleObject = reactive({
  border: "none",
  borderRadius: "6px",
});

const color = ref("red");
const background = ref("blue");
</script>