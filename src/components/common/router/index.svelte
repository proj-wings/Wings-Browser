<script lang="ts">
    import Router from "svelte-spa-router";
    import Main from "src/pages/main/main.svelte";

    const routes = {
        "/": Main,
    }
</script>

<Router {routes}/>