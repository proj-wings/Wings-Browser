<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import "./style.scss";
    import Logo from "src/assets/icon/logo.svelte";
    import SearchIcon from "src/assets/icon/search.svelte";

    const dispatch = createEventDispatcher<{
        search: string;
    }>();

    let searchQuery = "";

    const handleSearch = () => {
        if (searchQuery.trim()) {
            dispatch("search", searchQuery.trim());
        }
    };

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
</script>

<div class="search_container">
    <Logo/>
    <div class="input_wrapper">
        <input
                class="input"
                type="text"
                bind:value={searchQuery}
                on:keydown={handleKeydown}
        />
        <button class="search_button" on:click={handleSearch}>
            <SearchIcon/>
        </button>
    </div>
</div>