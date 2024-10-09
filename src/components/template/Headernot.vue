<template>
<Header>
<head>
    <link rel="icon" href="/src/components/isons/icons.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <title >{{NamePages}}</title>
</head>
<body>
    
    <mainLayolt></mainLayolt>
</body>


</Header>
</template>

<script setup>
import Header from '/src/App.vue'
const Header ={
 NamePages (){
 }
}
defineProps({
    NamePages:String,
})

</script>


<style scoped>

</style>