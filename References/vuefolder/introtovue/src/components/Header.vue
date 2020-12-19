<template>
    <div id="header">
        <h1> {{passedtitle}} </h1>
        <button v-on:click="changeTitle">Change</button>
    </div>
</template>

<script>
export default {
    props: ['passedtitle'],
    methods: {
        changeTitle: function(){
            this.$emit('changeTitle2','D mushift')
        }
    }
}
</script>

<style>

</style>